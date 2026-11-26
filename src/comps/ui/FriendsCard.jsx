import Image from "next/image";
import React, { useEffect } from "react";



const FriendsCard = ({ friend }) => {
    return (
        <div
                    key={friend.id}
                    className="card bg-base-100 w-[200px] h-[300px] shadow-sm"
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
                      <p className="text-gray-400">{friend.daysSinceContact}d ago</p>
        
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
                    </div>
                  </div>
    )
}
export default FriendsCard;
