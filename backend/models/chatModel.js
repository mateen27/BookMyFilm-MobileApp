const mongoose = require("mongoose");

const chatModel = mongoose.Schema({
  chatName: {
    type: String,
    trim: true,
  },
  isGroupChat: {
    type: Boolean,
    default: false,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId, // will contain id of that particular user
      ref: "User",
    },
  ],
  latestMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
  },
  groupAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
} , 
{
    timestamps: true
}
);

const Chat = mongoose.model("Chat" , chatModel);

module.exports = Chat;

// chat Name
// is group chat
// users
// latest Message Reference
// group Admin [in case of group]
