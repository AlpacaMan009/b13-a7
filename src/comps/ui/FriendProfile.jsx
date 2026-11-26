import Image from "next/image";
import React from "react";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";

const FriendProfile = ({ friend }) => {
  return (
    <div className="mx-auto max-w-[70%] mt-10">
      <div
        key={friend.id}
        className="card bg-base-100 w-[400px] h-[350px] shadow-sm"
      >
        <figure className="mt-7">
          <Image
            src={friend.avatar}
            alt={friend.name}
            className="rounded-full object-cover"
            width={95}
            height={70}
          ></Image>
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title">{friend.name}</h2>
          

          {/* tag section */}

          <div className="card-actions">
            {friend.tags.map((tag, index) => (
              <div
                key={index}
                className="badge bg-[#CBFADB] text-[#244D3F] font-semibold rounded-xl"
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Status section */}

          <div className="card-actions">
            <div
              className={`badge  border-none rounded-xl text-center ${
                friend.statusColor === "red"
                  ? "bg-[#EF4444] text-white"
                  : friend.statusColor === "orange"
                    ? "bg-[#EFAD44] text-white"
                    : "bg-[#244D3F] text-white"
              }`}
            >
              {friend.status}
            </div>

          </div>
            <h2 className="text-lg italic  text-gray-400">"{friend.bio}"</h2>
            <h2 className="text-md font-light  text-gray-400">Preferred: {friend.preferredContact || "email"}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 w-[400px] my-3 gap-2">
        <button className="btn  md:btn-md lg:btn-lg ">
            <RiNotificationSnoozeLine />
            Snooze 2 Weeks</button>
      <button className="btn md:btn-md lg:btn-lg "><FiArchive /> Archive</button>
      <button className="btn  md:btn-md lg:btn-lg  text-red-500"><RiDeleteBin6Line /> Delete</button>
      </div>
    </div>
  );
};

export default FriendProfile;
