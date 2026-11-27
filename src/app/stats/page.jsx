"use client";

import { TimeLineContext } from "@/context/TimeLineProvider";
import React, { useContext } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";



const StatsPage = () => {
  const { events } = useContext(TimeLineContext);


  console.log("RAW EVENTS ARRIVING:", events);


  const callCount = events.filter((e) => e.type === "Call").length;
  const textCount = events.filter((e) => e.type === "Text").length;
  const videoCount = events.filter((e) => e.type === "Video").length;

  const total = callCount + textCount + videoCount;

  console.log("COUNTS:", { callCount, textCount, videoCount });

  const data = [
    {
      name: "Call",
      value: callCount,
      fill: "#244D3F",},
     { name: "Text",
      value: textCount,
      fill: "#7E35E1",},
     { name: "Video",
      value: videoCount,
      fill: "#37A163",
    },
  ];

  console.log("FINAL DATA SENT TO CHART:", data);

  console.log("stats data", data)
  return (
    <div className="max-w-7xl mx-auto w-full p-8 mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Friendship Analytics
      </h1>

      <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-8 min-h-[400px] flex flex-col">
        <p className="text-sm text-gray-500 mb-8">By Interaction Type</p>

        {total === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400">
            <p>No Interactions yet</p>
          </div>
        ) : (
          <div className="flex justify-center w-full flex-1">
            <PieChart
              key={total}
              style={{
                width: "100%",
                maxWidth: "400px",
                maxHeight: "400px",
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="65%"
                outerRadius="85%"
                cornerRadius={8}
                paddingAngle={3}
                dataKey="value"
                isAnimationActive={true}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>

              <Tooltip />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                wrapperStyle={{ fontSize: "14px", paddingTop: "20px" }}
              />
            </PieChart>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPage;
