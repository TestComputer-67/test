import React from "react";

const JoinMeetForm = ({
  meetCode,
  setMeetCode,
  userName,
  setUserName,
  handleSubmit,
}) => {
  return (
    <form className="w-full mx-auto">
      <div className="mb-5">
        <label
          htmlFor="username-success"
          className="block mb-2 text-lg font-medium text-black"
        >
          Adınız
        </label>
        <input
          type="text"
          id="username-success"
          className="bg-white border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 w-full p-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2"
          placeholder="Adınız"
          autoComplete="new-password"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="meetcode"
          className="block mb-2 text-lg font-medium text-black"
        >
          Toplantı Kodu
        </label>
        <input
          type="text"
          id="meetcode"
          className="bg-white border rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 w-full p-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2"
          placeholder="Toplantı Kodu"
          autoComplete="new-password"
          value={meetCode}
          onChange={(e) => setMeetCode(e.target.value)}
        />
      </div>
      <div className="flex justify-center items-center gap-4 mt-4 mb-6">
        <button
          className="self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0"
          onClick={handleSubmit}
        >
          Katıl
        </button>
      </div>
    </form>
  );
};

export default JoinMeetForm;
