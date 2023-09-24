import React, { useState } from "react";
import ReactDOM from "react-dom";

import { useDispatch } from "react-redux";

import Modal from "../../Molecules/Modal/Modal";
import Select from "../../Atoms/Select/Select";
import TextField from "../../Atoms/TextField/TextField";
import Textarea from "../../Atoms/Textarea/Textarea";
import Button from "../../Atoms/Button/Button";

import modalHeaderStyles from "./../../Molecules/Modal/Header/Header.module.scss";
import modalBodyStyles from "./../../Molecules/Modal/Body/Body.module.scss";

import { createTask } from "./../../../slices/tasks/tasksSlices";

const CreateTask = ({ toogle }) => {
	const modalPortal = document.getElementById("modal-portal");

	const dispatch = useDispatch();

	const status = [
		"New Request",
		"In Progress",
		"In Review",
		"Bug",
		"Completed",
	];

	const members = [
		"Lee Ji Eun",
		"Myoui Mina",
		"Im Nayeon",
		"Kim Dahyun",
		"Jeongyeon",
	];

	const backlog = ["Design", "Website", "App", "Dribbble"];

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [selectedMember, setSelectedMember] = useState([]);
	const [selectedStatus, setSelectedStatus] = useState([]);
	const [selectedBacklog, setSelectedBacklog] = useState([]);

	const addTask = () => {
		const payload = {
			title,
			description,
			members: selectedMember,
			selectedStatus: selectedStatus[0],
			backlog: selectedBacklog,
		};

		dispatch(createTask(payload));

		toogle();
	};

	return ReactDOM.createPortal(
		<Modal.Base>
			<Modal.Container>
				<Modal.Header>
					<div className={`${modalHeaderStyles["modal__header--left"]}`}>
						Create new task
					</div>
					<div className={`${modalHeaderStyles["modal__header--right"]}`}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className={modalHeaderStyles["modal__icon"]}
							onClick={toogle}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</div>
				</Modal.Header>
				<Modal.Body>
					<TextField
						placeholder='Untitled'
						title
						value={title}
						setValue={setTitle}
					/>
					<div className={`${modalBodyStyles["modal__body--task__detail"]}`}>
						<div className={modalBodyStyles["modal__body--task__detail--left"]}>
							<div>Status</div>
							<div>Assign</div>
							<div>Backlog</div>
						</div>
						<div
							className={modalBodyStyles["modal__body--task__detail--right"]}>
							<div className={modalBodyStyles["select"]}>
								<Select
									placeholder='Status'
									options={status}
									selectedOption={selectedStatus}
									setSelectedOption={setSelectedStatus}
								/>
							</div>
							<div className={modalBodyStyles["select"]}>
								<Select
									placeholder='Assign a member'
									options={members}
									selectedOption={selectedMember}
									setSelectedOption={setSelectedMember}
								/>
							</div>
							<div className={modalBodyStyles["select"]}>
								<Select
									placeholder='Backlog'
									options={backlog}
									selectedOption={selectedBacklog}
									setSelectedOption={setSelectedBacklog}
								/>
							</div>
						</div>
					</div>
					<Textarea
						placeholder='Description here...'
						value={description}
						setValue={setDescription}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={addTask}>Create</Button>
				</Modal.Footer>
			</Modal.Container>
		</Modal.Base>,
		modalPortal
	);
};

export default CreateTask;
