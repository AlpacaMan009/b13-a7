"use client";
import FriendsCard from "@/comps/ui/FriendsCard";
import Image from "next/image";
import React, { useEffect, useState } from "react";


const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");

      const friends = await res.json();

      console.log(friends);

      setFriends(friends);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl mt-6 mb-5 font-semibold">Your Friends</h1>

      <div className="grid grid-cols-4 gap-6">
        {friends.map((friend) => (
          <FriendsCard key={friend.id} friend={friend}></FriendsCard>
        ))}
      </div>
    </div>
  );
};

export default Friends;
