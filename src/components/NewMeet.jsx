import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// socket connection
import socket from "./socket";

// icons
import { FaCalendarAlt } from "react-icons/fa";

// components
import Baslik from "./meet/Baslik";
import NewMeetForm from "./meet/NewMeetForm";

const NewMeet = () => {
  const [allMeets, setAllMeets] = useState([]);
  const [meetName, setMeetName] = useState("");
  const [meetDescription, setMeetDescription] = useState("");
  const [meetDate, setMeetDate] = useState("");
  const [meetTime, setMeetTime] = useState("");
  const [meetCode, setMeetCode] = useState("");
  const navigate = useNavigate();
  // get all meets
  useEffect(() => {
    getAllMeets();
  }, []);
  async function getAllMeets() {
    socket.on("allMeets", (data) => {
      setAllMeets(data);
    });
  }

  const validate = () => {
    if (!meetName || !meetCode || !meetDate || !meetDescription || !meetTime) {
      return false;
    }

    // make sure meet code is unique and name is unique
    for (let i = 0; i < allMeets.length; i++) {
      if (
        allMeets[i].meetCode === meetCode ||
        allMeets[i].meetName === meetName
      ) {
        return false;
      }
    }
    return true;
  };

  const validateTarih = () => {
    // check if date is valid should be greater than today
    const today = new Date();
    const meetDateObj = new Date(meetDate);
    if (meetDateObj < today) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Tüm alanları doldurunuz");
      return;
    }

    if (!validateTarih()) {
      toast.error("Tarih bugünden küçük olamaz");
      return;
    }

    const data = {
      meetName,
      meetCode,
      meetDate,
      meetTime,
      meetDescription,
    };
    socket.emit("makeMeet", data);
    toast.success("Toplantı başarıyla oluşturuldu");
    setMeetName("");
    setMeetCode("");
    setMeetDate("");
    navigate("/joinmeet");
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-firstColor">
      {/* title */}
      <Baslik />

      {/* calendar icon */}
      <div className="flex justify-center items-center mb-2">
        <FaCalendarAlt className="text-4xl text-center font-bold text-pink-600" />
      </div>
      <div className=" bg-firstColor shadow-2xl rounded-xl py-8 px-4 md:py-16 md:px-8 w-full md:w-1/2">
        <div className="flex flex-col justify-around items-center md:flex-row gap-8 w-full">
          {/* form */}
          <div className="flex justify-center items-center gap-4 w-full">
            <NewMeetForm
              handleSubmit={handleSubmit}
              setMeetDate={setMeetDate}
              setMeetTime={setMeetTime}
              setMeetName={setMeetName}
              setMeetDescription={setMeetDescription}
              setMeetCode={setMeetCode}
              meetCode={meetCode}
            />
          </div>
          {/* image */}
        </div>
      </div>
    </div>
  );
};

export default NewMeet;
