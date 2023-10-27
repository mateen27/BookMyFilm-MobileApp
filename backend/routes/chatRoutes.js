const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { accessChat, fetchChats, createGroupChat, renameGroup, addToGroup, removeFromGroup } = require("../controller/chatControllers");

const router = express.Router();

// only loggin signed in users
// will create chats or acess them
router.route("/").post(protect, accessChat);
// // will get all the chats from the database
router.route('/').get(protect , fetchChats);
// not tested
// // group chat
router.route('/group').post(protect , createGroupChat);
// // rename group
router.route('/rename').put(protect , renameGroup);
// // remove group or user
router.route('/groupremove').put(protect , removeFromGroup);
// // add to the group
router.route('/groupadd').put(protect , addToGroup);

module.exports = router;
