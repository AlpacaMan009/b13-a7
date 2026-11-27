"use client"

import { TimeLineContext } from "@/context/TimeLineProvider";
import React, { useCallback, useContext } from "react";
import { FiMessageSquare, FiPhone, FiVideo } from "react-icons/fi";

const TimeLinePage = () => {
  const { events } = useContext(TimeLineContext);

  console.log("tmieline events", events)

  const getIcon = (type) => {
    if (type === "Call")
      return <FiPhone className="text-xl text-gray-700"></FiPhone>;
    if (type === "Text")
      return (
        <FiMessageSquare className="text-xl text-gray-700"></FiMessageSquare>
      );
    if (type === "Video")
      return <FiVideo className="text-xl text-gray-700"></FiVideo>;

    return <span className="text-xl">🤝</span>;
  };
  return (
    <div className="max-w-7xl mx-auto w-full p-8 flex flex-col items-start">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Timeline</h1>

      <div className="mb-8">
        <select className="select select-bordered w-48 text-gray-500 bg-white border-gray-300">
          <option>Filter timeline</option>
        </select>
      </div>


      <div className="flex flex-col gap-4 w-full">
        {events.length === 0 ? (
          <div className="text-center p-10 bg-white border border-gray-200 rounded-lg shadow-sm">
            <p className="text-gray-500">No interactions yet.</p>
            <p className="text-sm text-gray-400 mt-2">Go to a friend's profile and click Call, Text, or Video!</p>
          </div>
        ) : (
          events.map((event) => (
            <div 
              key={event.id} 
              className="card border border-gray-200 bg-white shadow-sm p-4 flex-row items-center gap-4"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                {getIcon(event.type)}
              </div>
              
              {/* Text Details */}
              <div>
                <p className="font-bold text-gray-800 text-base">
                  {event.type} <span className="font-normal text-gray-600">with {event.name}</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">{event.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TimeLinePage;
