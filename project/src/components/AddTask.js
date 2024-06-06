import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { Add_Task } from '../redux/TasksSlice';

function AddTask() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const dispatch = useDispatch();

	const [newTask, setTask] = useState(
		{
			id: Math.random(),
			task: "",
			prio: ""
		}
	);
  
	return (
	  <>
		<Button variant="primary" onClick={handleShow}>
		  Add Task
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
				<Form.Control as="textarea" rows={3} onChange={(e) => setTask({...newTask, task: e.target.value})} />
			  </Form.Group>

			  <Form.Select onChange={(e) => setTask({...newTask, prio: e.target.value})} aria-label="Default select example">
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
			<Button variant="primary" onClick={() => {dispatch(Add_Task(newTask)); handleClose()}}>
			  Save Changes
			</Button>
		  </Modal.Footer>
		</Modal>
	  </>
	);
  
}

export default AddTask