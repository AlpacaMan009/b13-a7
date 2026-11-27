"use client"
import React from 'react';
import { GridLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex justify-center items-center h-[60vh]'>
          <GridLoader color='#244D3F'></GridLoader> 
          
           

        
        </div>
    );
};

export default loading;