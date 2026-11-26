import FriendProfile from '@/comps/ui/FriendProfile';
import React from 'react';


const friendsPromise = async() => {
    "use cache"
    const res = await fetch("http://localhost:3000/data.json")

    const data = await res.json()

    return data
}

const FriendsPage = async({params}) => {
    const {id} = await params

    
    const friends = await friendsPromise()

    const friend = friends.find((f) => f.id === id)
    return (
        <div>
            
            <FriendProfile friend={friend}></FriendProfile>
        </div>
    );
};

export default FriendsPage;