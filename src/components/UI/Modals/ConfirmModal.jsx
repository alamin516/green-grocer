import React from 'react'

const ConfirmModal = ({openModal, setOpenModal, handleDeleteProduct, data}) => {
  return (
    <div className={`${openModal ? "opacity-100 w-full min-h-[100vh]" : "opacity-0 w-0 min-h-[0]"} transition-all duration-300 ease-in-out fixed top-0 left-0 z-[99999] flex justify-center items-center w-full bg-black/60`}>
        <div className='max-w-[100%] lg:max-w-[400px]  mx-auto bg-white p-10 text-center shadow-lg rounded-md'>
            <h3 className='mb-3 text-2xl font-bold'>Are you want to Delete this product</h3>
            <div className='flex justify-center gap-5'>
                <button onClick={()=> setOpenModal(false)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-md'>
                    Cancel
                </button>
                <button onClick={()=> handleDeleteProduct(data?._id)} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-md'>
                    Confirm
                </button>
            </div>
        </div>
    </div>
  )
}

export default ConfirmModal