import React, { useState } from 'react'
import CreateTask from '../components/Main/item/CreateTask'
import SortTasks from '../components/Main/item/SortTasks'
import TaskItem from '../components/Main/item/TaskItem'



const Tasks = () => {
		const [tasks, setTasks] = useState([]);
		const [sortBy, setSortBy] = useState('All');

		const filteredTasks = tasks.filter(task => {
			if (sortBy === 'All') return true;
			if (sortBy === 'Completed') return task.completed;
			if (sortBy === 'Not completed') return !task.completed;
			return false;
		});

		function handleSortBy(state) {
			setSortBy(state);
		}
		

		const changeTask = id => {
			const copy = [...tasks]
			const current = copy.find(t => t.id === id)
			current.completed = !current.completed
			setTasks(copy)
		}

		const removeTask = id => setTasks([...tasks].filter(t => t.id !== id))


	return (
		<div className=' text-black w-3/5 mx-auto'>
			<CreateTask setTasks={setTasks}/>
			<SortTasks handleSortBy={handleSortBy}/>
			{filteredTasks.length === 0 
				? 
        <div className='flex justify-center'>
					<h1 className=' text-black text-5xl pt-16'>
						Tasks not found :(
					</h1>
				</div>
				: 
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            changeTask={changeTask}
            removeTask={removeTask}
          />
        ))}
		</div>
	)
}

export default Tasks;