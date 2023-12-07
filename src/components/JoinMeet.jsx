import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// socket connection
import socket from "./socket";

// icons
import { BsCalendarDateFill } from "react-icons/bs";

// components
import JoinMeetForm from "./meet/JoinMeetForm";

const JoinMeet = () => {
  const [allMeets, setAllMeets] = useState([]);
  const [allusers, setAllUsers] = useState([]);
  const [meetCode, setMeetCode] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAllMeets();
    getAllUsers();
  }, []);

  async function getAllMeets() {
    socket.emit("getAllMeets");
    socket.on("allMeets", (data) => {
      setAllMeets(data);
    });
  }

  async function getAllUsers() {
    socket.on("allUsers", (data) => {
      setAllUsers(data);
    });
  }

  const validate = () => {
    if (!meetCode || !userName) {
      return false;
    }

    // make sure meet code is unique and name is unique
    for (let i = 0; i < allMeets.length; i++) {
      if (allMeets[i].meetCode === meetCode) {
        return true;
      }
    }
    return false;
  };

  // validate for user is include in array or not if not add it through socket
  const validateUser = () => {
    if (!userName) {
      return false;
    }
    // make sure meet code is unique and name is unique
    for (let i = 0; i < allusers.length; i++) {
      if (allusers[i].userName === userName) {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Tüm alanları doldurunuz");
      return;
    }
    const data = {
      meetCode,
      userName,
    };

    // data for user should be have meetCode and userName
    const userData = {
      meetCode,
      userName,
      date: "",
      time : "",
      agree: false,
    };

    if (!validateUser()) {
      socket.emit("addUser", userData);
    }
    socket.emit("joinMeet", data);
    toast.success("Toplantıya katıldınız");
    localStorage.setItem("userName", userName);
    setMeetCode("");
    setUserName("");
    navigate(`/meet/${meetCode}`);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-firstColor">
      {/* title */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <h1 className="text-4xl font-bold">
          Toplantıya <span className="text-pink-500 font-bold">Anında</span>{" "}
          Katılın!
        </h1>
      </div>

      {/* calendar icon */}
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-4">
          <BsCalendarDateFill className="text-5xl text-pink-600" />
        </div>
      </div>
      <div className="bg-firstcolor shadow-2xl rounded-xl md:py-20 md:px-12 py-8 px-2 m-1 md:m-6 w-full md:w-1/2">
        <div className="flex flex-col justify-around items-center gap-2 w-full mx-auto">
          <div className="flex justify-center items-center gap-4 w-full mx-auto">
            <JoinMeetForm
              handleSubmit={handleSubmit}
              setUserName={setUserName}
              setMeetCode={setMeetCode}
              meetCode={meetCode}
              userName={userName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinMeet;
