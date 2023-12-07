import React from "react";

const NewMeetForm = ({
  setMeetName,
  setMeetDate,
  setMeetTime,
  setMeetDescription,
  setMeetCode,
  handleSubmit,
  meetCode,
}) => {
  return (
    <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Toplantı Adı"
        className="border-2 border-fourthColor p-2 rounded-lg focus:outline-none focus:border-blue-400 text-black"
        onChange={(e) => setMeetName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Toplantı Tarihi"
        className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-400 text-black"
        onChange={(e) => setMeetDate(e.target.value)}
      />
      <input 
        type="time"
        placeholder="Toplantı Saati"
        className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-400 text-black"
        onChange={(e) => setMeetTime(e.target.value)}
      />
      <input
        type="text"
        placeholder="Toplantı Açıklaması"
        className="border-2 border-fourthColor p-2 rounded-lg focus:outline-none focus:border-blue-400 text-black"
        onChange={(e) =>  setMeetDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Toplantı Kodu"
        className="bg-fourthColor p-2 rounded-lg focus:outline-none focus:border-blue-400 text-black"
        disabled
        value={meetCode}
        onChange={(e) => setMeetCode(e.target.value)}
      />
      <button
        type="button"
        className="px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-pink-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0 w-full"
        onClick={() =>
          setMeetCode(Math.random().toString(36).substring(2, 7).toUpperCase())
        }
      >
        Kod Oluştur
      </button>
      <button
        type="submit"
        className="self-center inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-500 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0"
        >
        Toplantı Oluştur
      </button>
    </form>
  );
};

export default NewMeetForm;
