const User = require("./models/users");
const Chat = require("./models/chat");
const Room = require("./models/room");

module.exports.createUser = async (name, password) => {
    const user = new User({
        name: name,
        password: password
    });

    return await user.save();
}

module.exports.getUserById = async (id) => {
    return await User.findById(id);
}

module.exports.getMessages = async (room) => {
    return await Chat.find({ room: room });
}

module.exports.getLastMessage = async () => {
    return await Chat.findOne().sort({ field: 'asc', _id: -1 }).limit(1);
}

module.exports.createMessage = async (room, name, message, role, messageID) => {
    console.log("saved message:",  room, name, message, role, messageID);
    const chat = new Chat({
        room: room,
        name: name,
        message: message,
        role: role,
        messageID: messageID
    });

    return await chat.save();
}

module.exports.getUser = async (name) => {
    return await User.findOne({ name: name });
}

module.exports.getAllRoom = async () => {
    return await Room.find();
}

module.exports.createRoom = async (roomName) => {
    console.log("saved room:", roomName);
    const room = new Room({
        room: roomName
    });

    return await room.save();
}