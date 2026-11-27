"use client";
import FriendsCard from "@/comps/ui/FriendsCard";
import { TimeLineContext } from "@/context/TimeLineProvider";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Info from "./Info";
import friendsData from "@/data/data.json"


const Friends = () => {

  const {events} = useContext(TimeLineContext)


  const totalFriends = friendsData.length

  return (

    
    <div>
    <Info totalFriends={totalFriends}></Info>
      <h1 className="text-3xl mt-6 mb-5 font-semibold">Your Friends</h1>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
        {friendsData.map((friend) => (
          <FriendsCard key={friend.id} friend={friend}></FriendsCard>
        ))}
      </div>
    </div>
  );
};

export default Friends;
