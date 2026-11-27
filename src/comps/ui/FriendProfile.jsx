"use client";

import { TimeLineContext } from "@/context/TimeLineProvider";
import Image from "next/image";
import React, { useContext } from "react";
import { FiArchive, FiMessageSquare, FiPhone, FiVideo } from "react-icons/fi";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";

const FriendProfile = ({ friend }) => {
  const { addEvent } = useContext(TimeLineContext);

  const handleAction = (type) => {
    console.log("Button clicked! Saving:", friend.name);
    addEvent(type, friend.name);
  };


  return (
    <div className="flex flex-col md:flex-row mx-auto max-w-5xl mt-10 gap-6 p-4 items-stretch">
      {/* left column */}
      <div className="flex flex-col gap-4 w-full md:w-[400px] pt-0">
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
            <h2 className="text-md font-light  text-gray-400">
              Preferred: {friend.preferredContact || "email"}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 w-[400px] my-3 gap-2">
          <button className="btn  md:btn-md lg:btn-lg ">
            <RiNotificationSnoozeLine />
            Snooze 2 Weeks
          </button>
          <button className="btn md:btn-md lg:btn-lg ">
            <FiArchive /> Archive
          </button>
          <button className="btn  md:btn-md lg:btn-lg  text-red-500">
            <RiDeleteBin6Line /> Delete
          </button>
        </div>
      </div>

      {/* right coulmn */}
      <div className="w-full flex flex-col flex-1 pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full ">
          <label className="card border border-gray-300 bg-white ">
            <div className="card-body items-center">
              <h2 className="card-title  font-bold text-2xl">
                {friend.daysSinceContact}
              </h2>
              <p className="text-gray-500 whitespace-nowrap">
                Days Since Contact
              </p>
            </div>
          </label>

          <label className="card border border-gray-300 bg-white ">
            <div className="card-body items-center">
              <h2 className="card-title font-bold text-2xl">
                {friend.goalDays}
              </h2>
              <p className="text-gray-500 whitespace-nowrap">Goal (Days)</p>
            </div>
          </label>
          <label className="card border border-gray-300 bg-white ">
            <div className="card-body items-center">
              <h2 className="card-title font-bold text-2xl whitespace-nowrap">
                {friend.nextDueDate}
              </h2>
              <p className="text-gray-500 whitespace-nowrap">Next Due</p>
            </div>
          </label>

          {/* the rows */}
        </div>

        {/* 2. RELATIONSHIP GOAL */}
        <div className="card border border-gray-200 bg-white shadow-sm w-full my-6">
          <div className="card-body p-5 flex-row items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-gray-700">
                Relationship Goal
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Connect every{" "}
                <span className="font-bold text-black">
                  {friend.goalDays || 30} days
                </span>
              </p>
            </div>
            <button className="btn btn-sm btn-ghost border border-gray-200 hover:bg-gray-100">
              Edit
            </button>
          </div>
        </div>

        {/* 3. QUICK CHECK-IN */}
        <div className="card border border-gray-200 bg-white shadow-sm w-full ">
          <div className="card-body p-5">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-3 gap-4 w-full h-full">

              {/* Call Button */}
              <button
                onClick={() => handleAction("Call")}
                className="btn btn-outline border-gray-200 h-20 flex-col hover:bg-gray-50"
              >
                <FiPhone className="text-2xl mb-2 text-gray-700" />
                <span className="font-normal text-gray-600">Call</span>
              </button>

              {/* Text Button */}
              <button
                onClick={() => handleAction("Text")}
                className="btn btn-outline border-gray-200 h-20 flex-col hover:bg-gray-50"
              >
                <FiMessageSquare className="text-2xl mb-2 text-gray-700" />
                <span className="font-normal text-gray-600">Text</span>
              </button>

              {/* Video Button */}
              <button
                onClick={() => handleAction("Video")}
                className="btn btn-outline border-gray-200 h-20 flex-col hover:bg-gray-50"
              >
                <FiVideo className="text-2xl mb-2 text-gray-700" />
                <span className="font-normal text-gray-600">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendProfile;
