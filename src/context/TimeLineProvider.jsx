"use client"

import React, { createContext, useState } from 'react';

export const TimeLineContext = createContext()



const TimeLineProvider = ({children}) => {

    const [events,setEvents] = useState([])

    const addEvent = (type, name) => {
        const newEvent = {
            id: Date.now(),
            type: type,
            name: name,
            date: new Date().toLocaleDateString("en-US", {
                month:"long", day: "numeric", year:"numeric"
            })

        }
        
        setEvents((prev) => [newEvent,...prev])
    }

    const data = {
        events, setEvents,addEvent,
    }
    return (
        <TimeLineContext.Provider value={data}>
            {children}
        </TimeLineContext.Provider>
    );
};

export default TimeLineProvider;