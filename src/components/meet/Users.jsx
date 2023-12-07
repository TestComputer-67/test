import React from "react";
import { FaUsers } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

const Users = ({ allusers }) => {
  return (
    <div className="w-full lg:w-2/3 h-full lg:min-h-screen flex flex-col items-center overflow-y-auto bg-gray-200 rounded-l-3xl shadow-lg">
      {/* display all users in this meet */}
      <h1 className="text-3xl font-bold m-5">
        Toplantıya Katılanlar <span className="text-pink-500">Listesi</span>{" "}
        <FaUsers className="inline-block text-3xl" />
      </h1>
      <div className="w-full lg:w-5/6 bg-white rounded-xl shadow-lg p-2 lg:p-8 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold w-1/4">Kullancı Adı</h1>
          <h1 className="text-xl font-bold w-1/4">Katılım Durumu</h1>
          <h1 className="text-xl font-bold w-1/4">Katılım Tarihi</h1>
          <h1 className="text-xl font-bold w-1/4">Katılım Saati</h1>
        </div>
        <div className="flex flex-col space-y-4">
          {/* if no users in this meet display a message */}
          {allusers.length === 0 && (
            <h1 className="text-xl font-bold text-center p-6">
              Henüz kimse katılmadı
            </h1>
          )}
          {allusers.map((user, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b-2 border-gray-200"
            >
              <h1 className="text-xl font-bold w-1/4">{user.userName}</h1>
              <h1 className="text-xl font-bold w-1/4">
                {user.agree ? (
                  <MdVerified className="text-green-500 text-2xl" />
                ) : (
                  <MdVerified className="text-red-500 text-2xl" />
                )}
              </h1>
              <h1 className="text-xl font-bold w-1/4">{user.date}</h1>
              <h1 className="text-xl font-bold w-1/4">{user.time}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
