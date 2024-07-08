import { io } from "socket.io-client";
const socket = io("localhost:5000");

export default function BuyLoad() {
  socket.on("connection", (socket) => {
    console.log(socket.id);
  });

  return <div className="text-white">Test</div>;
}
