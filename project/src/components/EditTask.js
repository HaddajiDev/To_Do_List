import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { Edit_Task } from '../redux/TasksSlice';

function EditTask({task, src, visible}) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const dispatch = useDispatch();

	const [editedtask, setTask] = useState(
		{
			id: task.id,
			task: task.task,
			prio: task.prio
		}
	);
  
	return (
	  <div style={{visibility: visible ? 'visible' : 'hidden'}}>
		<Button variant="danger" onClick={handleShow}>
		  <img src={src} alt=''/>
		</Button>  
		<Modal show={show} onHide={handleClose}>
		  <Modal.Header closeButton>
			<Modal.Title>New Task</Modal.Title>
		  </Modal.Header>
		  <Modal.Body>
			<Form>			  
			  <Form.Group
				className="mb-3"
				controlId="exampleForm.ControlTextarea1"
			  >
				<Form.Label>Task</Form.Label>
				<Form.Control as="textarea" rows={3} placeholder={task.task} onChange={(e) => setTask({...editedtask, task: e.target.value})} />
			  </Form.Group>

			  <Form.Select value={editedtask.prio} onChange={(e) => setTask({...editedtask, prio: e.target.value})} aria-label="Default select example">
				<Form.Label>Priorite</Form.Label>
					<option>Select Priorite</option>
					<option value="low">low</option>
					<option value="mid">mid</option>
					<option value="high">high</option>
				</Form.Select>
			</Form>
		  </Modal.Body>
		  <Modal.Footer>
			<Button variant="secondary" onClick={handleClose}>
			  Close
			</Button>
			<Button variant="primary" onClick={() => {dispatch(Edit_Task(editedtask)); handleClose()}}>
			  Save Changes
			</Button>
		  </Modal.Footer>
		</Modal>
	  </div>
	);
}

export default EditTask;