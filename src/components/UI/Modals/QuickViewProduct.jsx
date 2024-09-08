import React from 'react';

const QuickViewProduct = ({setOpenQuickView}) => {
    return (
        <div onClick={()=> setOpenQuickView(false)} className='fixed w-full min-h-screen bg-[#000]/70 top-0 left-0 z-[99999] flex justify-center items-center'>
            <div onClick={(e) => e.stopPropagation()} className='bg-white w-[80%] min-h-[80vh] p-[15px]'>
                Hello
            </div>
        </div>
    );
};

export default QuickViewProduct;