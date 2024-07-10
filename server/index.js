const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");
const app = express();

require("dotenv").config();

const server = app.listen(5000, function () {
  console.log(`server running on port: ${port}`);
  console.log(`server running on uri: ${uri}`);
});
const io = require("socket.io")(server, { cors: { origin: "*" } });

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.get("/", (req, res) => {
  res.send("welcome our chat app APIs.");
});

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

let onlineUsers = [];

io.on("connection", (socket) => {
  console.log("id", socket.id);

  //check online users
  socket.on("addNewUser", (userId) => {
    console.log(userId);
    !onlineUsers.some((user) => user.userId === userId) &&
      onlineUsers.push({
        userId,
        socketId: socket.id,
      });

    io.emit("getOnlineUsers", onlineUsers);
  });

  socket.on("sendMessage", (message) => {
    const user = onlineUsers.find(
      (user) => user.userId === message.recipientId
    );

    if (user) {
      io.to(user.socketId).emit("getMessage", message);
      io.to(user.socketId).emit("getNotification", {
        senderId: message.senderId,
        isRead: false,
        date: new Date(),
      });
    }
  });

  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);

    io.emit("getOnlineUsers", onlineUsers);
  });
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb connection established"))
  .catch((error) => console.log("Mongodb connection failed: ", error.message));
