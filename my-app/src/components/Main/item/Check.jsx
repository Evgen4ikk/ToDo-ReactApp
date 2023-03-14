import React from 'react'
import { BsCheck } from "react-icons/bs";

const Check = ( {completed} ) => {
	return (
		<div 
			className={` mx-3 border-2 rounded-md border-black ${completed ? " bg-black  " : ""} w-5 h-5 flex items-center justify-center`}
		>
			{completed && <BsCheck size={24} className='text-white'/>}
		</div>
	)
}

export default Check;