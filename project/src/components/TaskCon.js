import React from 'react'
import TaskCard from './TaskCard'
import AddTask from './AddTask'

function TaskCon() {
  return (
	<div className='container _con'>
		<div className='back'>
			<div className='logo_'>
				<img src='https://cdn4.iconfinder.com/data/icons/computer-and-web-2/500/Survey-48.png'/>				
				<h1>To Do List</h1>
			</div>			
			<AddTask />
			<div className='_con_2'>				
				<div className='task_container'>
					<TaskCard />
				</div>
			</div>
		</div>
	</div>
  )
}

export default TaskCon