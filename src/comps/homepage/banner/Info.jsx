import React from 'react';

const Info = ({totalFriends}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-6 ">
        <label className="card border border-gray-300 bg-white ">
          <div className="card-body items-center">
            <h2 className="card-title  font-bold text-2xl">{totalFriends}</h2>
            <p className='text-gray-500'>Total friends</p>
          </div>
        </label>

        <label className="card border border-gray-300 bg-white ">
          <div className="card-body items-center">
            <h2 className="card-title font-bold text-2xl">3</h2>
            <p className='text-gray-500'>On Track</p>
          </div>
        </label>
        <label className="card border border-gray-300 bg-white ">
          <div className="card-body items-center">
            <h2 className="card-title font-bold text-2xl">6</h2>
            <p className='text-gray-500'>Need Attention</p>
          </div>
        </label>
        <label className="card border border-gray-300 bg-white">
          <div className="card-body items-center">
            <h2 className="card-title font-bold text-2xl">12</h2>
            <p className='text-gray-500'>Interactions this Month</p>
          </div>
        </label>
      </div>
    );
};

export default Info;