import React from 'react';

const SmallLoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-screen bg-slate-300'>
              <div className=' z-10 w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400'></div>
      </div>
    );
};

export default SmallLoadingSpinner;