import React, { useState, useEffect } from "react";
import socket from "./socket";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

// components
import Details from "./meet/Details";
import Users from "./meet/Users";

// axios
import axios from "axios";

const Meet = () => {
  const [allMeets, setAllMeets] = useState([]);
  const [allusers, setAllUsers] = useState([]);
  const [meetDate, setMeetDate] = useState("");
  const [meetTime, setMeetTime] = useState("");
  const { meetcode } = useParams();

  const canAgree = () => {
    for (let i = 0; i < allusers.length; i++) {
      if (
        allusers[i].userName === localStorage.getItem("userName") &&
        allusers[i].agree === true
      ) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    getAllMeets();
    getAllUsers();
  }, []);

  async function getAllMeets() {
    socket.on("allMeets", (data) => {
      setAllMeets(data.filter((meet) => meet.meetCode === meetcode));
    });
  }

  async function getAllUsers() {
    socket.emit("getAllUsers", (data) => {
      console.log(data);
    });
    socket.on("allUsers", (data) => {
      setAllUsers(
        data.filter((user) => user.meetCode === meetcode && user.agree === true)
      );
    });
  }

  const handleChangeDateForUser = () => {
    const data = {
      meetcode,
      userName: localStorage.getItem("userName") || "",
      date: meetDate,
      time: meetTime,
      agree: true,
    };

    // check if user agree or not
    if (canAgree()) {
      toast.error("Sadece bir kez tarih değiştirebilirsiniz");
      return;
    }

    // check if meet date is empty or not
    if (!meetDate || !meetTime) {
      toast.error("Tarih boş olamaz");
      return;
    }

    socket.emit("putDate", data);
    getAllUsers();
    toast.success("Tarih başarıyla değiştirildi");
  };

  console.log(allMeets);
  const handleAgreeForUser = () => {
    const data = {
      meetcode,
      userName: localStorage.getItem("userName") || "",
      date: allMeets[0].meetDate,
      time: allMeets[0].meetTime,
      agree: true,
    };

    // check if user agree or not
    if (canAgree()) {
      toast.error("Katılmadan önce katıldığınızı onaylayamazsınız");
      return;
    }
    socket.emit("putDate", data);
    getAllUsers();
    toast.success("Başarıyla katıldınız");
  };

  const handleInsertToGoogleCalendar = async () => {
    // check if user agree or not
    if (!canAgree()) {
      toast.error("Google takvimine eklemek için önce katılmanız gerekir");
      return;
    }

    const res = await axios.post("https://koray-server.onrender.com/calender", {
      meetcode,
      summary: allMeets[0]?.meetName || "",
      description: allMeets[0]?.meetDescription || "",
      date: meetDate || allMeets[0]?.meetDate,
      time: meetTime || allMeets[0]?.meetTime,
    });
    const url = res.data;

    // change url to be able to open in same tab
    const newUrl = url.replace("target=_blank", "target=_self");
    window.open(newUrl, "_self");
  };

  return (
    <div className="min-h-screen bg-firstColor">
      {/* container for meet details */}
      <div className="flex flex-col min-h-screen lg:flex-row">
        {/* display all meet details */}
        <Details
          allMeets={allMeets}
          handleAgreeForUser={handleAgreeForUser}
          handleChangeDateForUser={handleChangeDateForUser}
          handleInsertToGoogleCalendar={handleInsertToGoogleCalendar}
          setMeetDate={setMeetDate}
          meetDate={meetDate}
          meetTime={meetTime}
          setMeetTime={setMeetTime}
        />
        {/* display all users in this meet */}
        <Users allusers={allusers} />
      </div>
    </div>
  );
};

export default Meet;
