import React, { useEffect, useState } from "react";
import "./Chats.css";
import { Avatar } from "@material-ui/core";
import { database } from "../firebase";
import { Link } from "react-router-dom";

function Chats({ addChat, id, name }) {
  const [avatars, setavatars] = useState("");
  const [messages, setmessages] = useState("");

  useEffect(() => {
    setavatars(Math.floor(Math.random() * 5000));
  }, []);

  useEffect(() => {
    if (id) {
      database
        .collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setmessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);


  return  (
    <Link to={`/rooms/${id}`}>
      <div className="chats">
        <Avatar src={`https://avatars.dicebear.com/api/human/${avatars}.svg`} />
        <div className="chats__info">
          <h3>{name}</h3>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  );
}

export default Chats;
