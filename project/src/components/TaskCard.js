import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Remove_Task } from '../redux/TasksSlice';
import EditTask from './EditTask.js';


function TaskCard() {
	const tasks = useSelector((state) => state.Task.tasklist);
	const dispatch = useDispatch();
	
	const [visible, setVisible] = useState(true);

  return (
	<div className='task_card'>
		<table>
			<tr>
				<th>Task</th>
				<th>Priority</th>
				<th>Action</th>
			</tr>			
		</table>
		<div>
			{tasks.map((el) => <div className='tasks_con'>
				<div className='one_task'>
					<h5 className='task_name'>{el.task}</h5>
					<h5><div className={`prio ${el.prio}`}>{el.prio}</div></h5>
					<div className='actions'>
						<button onClick={() => setVisible(false)}><img src='https://cdn2.iconfinder.com/data/icons/funtime-objects-part-2/60/005_056_okay_approve_check_test_good_vote-24.png' alt='' /></button>
						<EditTask visible={visible} task={el} src='https://cdn1.iconfinder.com/data/icons/material-core/18/create-24.png' />
						<button onClick={() => dispatch(Remove_Task(el.id))}><img src='https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/trash-delete-remove-24.png' alt='' /></button>
					</div>
				</div>				
			</div>)}
		</div>
		
	</div>
  )
}

export default TaskCard