import React, { useState } from 'react'

const CreateTask = ( {setTasks} ) => {
	const [title, setTitle] = useState('')

	const addTask = title => {
		if (title !== '')
		setTasks(prev => [
			{
				id: Date.now(),
				title,
				complete: false,
			},
			...prev,
		])
		setTitle('')
	}


	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 mt-20 w-full'>
			<input
				type="text"
				onChange={e => setTitle(e.target.value)}
				value={title}
				onKeyDown={e => e.key === 'Enter' && addTask(title)}
				className=' bg-transparent w-full border-none outline-none'
				placeholder='Add a task' 
			/>
		</div>
	)
}

export default CreateTask