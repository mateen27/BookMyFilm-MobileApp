const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const User = require("../models/userModel");

const accessChat = asyncHandler(async (req, res) => {
  // responsible for create or fetching one - one chat
  // will check if the chat exists with the below id or not else create it
  const { userId } = req.body;

  // when the id is not sent
  if (!userId) {
    console.log("UserId param not sent with request!");
    return res.sendStatus(400);
  }

  // otherwise we will check chat exists with the user
  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name pic email",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);

      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );

      res.status(200).send(FullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

// fetch chats API
const fetchChats = asyncHandler(async (req, res) => {
  try {
    // need to check which user is logged in and query all chats for the particular user!
    // showing chats where the user is a part of
    Chat.find({
      users: {
        $elemMatch: { $eq: req.user._id },
      },
    })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name pic email",
        });
        
        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const createGroupChat = asyncHandler(async ( req, res ) => {
    // when there is no group name and not selected users
    if(!req.body.users || !req.body.name) {
        return res.status(400).send({ message : 'Please fill all the fields!'});
    }

    // sent users in stringify from frontend and parsing it in the backend
    var users = JSON.parse(req.body.users);

    // checking if the group have more than 2 members or not
    if( users.length < 2) {
        return res
            .status(400)
            .send('More than 2 users are required to create a group chat');
    }

    users.push(req.user);

    try {
        const groupChat = await Chat.create({
            chatName: req.body.name , 
            users: users , 
            isGroupChat: true , 
            groupAdmin: req.user
        })

        // fetching group chat and sending back to the user!
        const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
        .populate("users", "-password")
        .populate("groupAdmin", "-password")

        res.status(200).json(fullGroupChat)
    } catch (error) {
        res.status(400);
        throw new Error(error.message);
    }
})

// rename group endpoint api

module.exports = { accessChat, fetchChats , createGroupChat };
