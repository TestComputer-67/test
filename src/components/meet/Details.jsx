import React from "react";
import { IoIosInformationCircle } from "react-icons/io";

const Details = ({
  allMeets,
  handleAgreeForUser,
  handleChangeDateForUser,
  handleInsertToGoogleCalendar,
  meetDate,
  setMeetDate,
  meetTime,
  setMeetTime,
}) => {
  return (
    <div className="w-full lg:w-1/3 min-h-screen flex flex-col items-center mr-4">
      {/* title */}
      <h1 className="text-3xl font-bold m-5">
        Toplantı <span className="text-pink-500">Detayları</span>{" "}
        <IoIosInformationCircle className="inline-block text-3xl" />
      </h1>

      <div className="w-full lg:w-5/6 bg-white rounded-xl shadow-lg p-4 lg:p-8 space-y-4">
        {/* meet name  */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Toplantı <span className="text-pink-500">Adı</span>
          </h1>
          <h1 className="text-xl font-bold text-pink-600">
            {allMeets[0]?.meetName}
          </h1>
        </div>
        {/* meet code */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Toplantı <span className="text-pink-500">Kodu</span>
          </h1>
          <h1 className="text-xl font-bold">{allMeets[0]?.meetCode}</h1>
        </div>

        {/* meet date */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Toplantı <span className="text-pink-500">Tarihi</span>
          </h1>
          <h1 className="text-xl font-bold">{allMeets[0]?.meetDate}</h1>
        </div>

        {/* meet time */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Toplantı <span className="text-pink-500">Saat</span>
          </h1>
          <h1 className="text-xl font-bold">{allMeets[0]?.meetTime}</h1>
        </div>
      </div>
      {/* meet description */}
      <div className="w-5/6  pl-4 lg:pl-8 pt-4 pr-4 pb-4 self-start space-y-4 mt-5">
        <h1 className="text-2xl font-bold sel">
          Toplantı <span className="text-pink-500">Açıklaması</span>
        </h1>
        <h1 className="text-xl font-bold break-all">
          {allMeets[0]?.meetDescription}
        </h1>
      </div>

      <div className="w-full h-[2px] bg-gray-200 rounded-xl"></div>

      {/* create a button for agree for data meet and create a button for change a new meet date  and create a button for insert to google calendar*/}
      <div className="w-5/6 flex flex-col justify-between items-center mt-5">
        <button
          className="bg-pink-500 text-white rounded-xl px-4 py-2 font-bold hover:bg-pink-600 w-full mb-2"
          onClick={handleAgreeForUser}
        >
          Katılıyorum
        </button>
        <button
          className="bg-pink-500 text-white rounded-xl px-4 py-2 font-bold hover:bg-pink-600 w-full mb-2"
          onClick={handleChangeDateForUser}
        >
          Tarihi Değiştir
        </button>
        <input
          type="date"
          className="bg-gray-200 rounded-xl px-4 py-2 font-bold hover:bg-pink-600 hover:text-white w-full mb-2"
          onChange={(e) => setMeetDate(e.target.value)}
          value={meetDate}
        />
        <input
          type="time"
          className="bg-gray-200 rounded-xl px-4 py-2 font-bold hover:bg-pink-600 hover:text-white w-full mb-2"
          onChange={(e) => setMeetTime(e.target.value)}
          value={meetTime}
        />
        <button
          className="bg-pink-500 text-white rounded-xl px-4 py-2 font-bold hover:bg-pink-600 w-full mb-2"
          onClick={handleInsertToGoogleCalendar}
        >
          Kaydet Google Takvimine
        </button>
      </div>

      {/* footer for meet details */}
      <div className="w-full h-full">
        <div className="w-full h-full flex flex-col justify-end items-center">
          <h1 className="text-sm  text-center">
            2023 <span className="text-pink-500 font-bold">Koray</span>, Tüm
            Hakları Saklıdır.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Details;
