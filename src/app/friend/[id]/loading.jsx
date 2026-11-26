"use client"
import React from 'react';
import { GridLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
          {/* <GridLoader color='#244D3F'></GridLoader> 
          
            */}

            <span className="loading loading-bars loading-xl"></span>
        </div>
    );
};

export default loading;