"use client";
import FriendsCard from "@/comps/ui/FriendsCard";
import { TimeLineContext } from "@/context/TimeLineProvider";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Info from "./Info";


const Friends = () => {
  const [friends, setFriends] = useState([]);
  const {events} = useContext(TimeLineContext)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");

      const friends = await res.json();

      console.log(friends);

      setFriends(friends);
    };

    fetchData();
  }, []);

  const totalFriends = friends.length

  return (

    
    <div>
    <Info totalFriends={totalFriends}></Info>
      <h1 className="text-3xl mt-6 mb-5 font-semibold">Your Friends</h1>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendsCard key={friend.id} friend={friend}></FriendsCard>
        ))}
      </div>
    </div>
  );
};

export default Friends;
