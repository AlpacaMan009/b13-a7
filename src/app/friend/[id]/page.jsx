import FriendProfile from '@/comps/ui/FriendProfile';
import React from 'react';
import loading from '@/app/loading';
import friendsData from '@/data/data.json'






const FriendsPage = async({params}) => {
    const {id} = await params

    
    

    const friend = friendsData.find((f) => f.id === id)
    return (
        <div>
            
            <FriendProfile friend={friend}></FriendProfile>
        </div>
    );
};

export default FriendsPage;