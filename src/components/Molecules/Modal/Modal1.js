import React from "react";

import Button from "../../Atoms/Button/Button";
import Select from "../../Atoms/Select/Select";
import Textarea from "../../Atoms/Textarea/Textarea";
import TextField from "../../Atoms/TextField/TextField";

import styles from "./Modal.module.scss";

const Modal = () => {
	const onChangeHandler = () => {};

	const closeModal = () => {};

	return (
		<div className={styles["base"]}>
			<div className={styles["modal"]}>
				<div className={styles["modal__header"]}>
					<div className={styles["modal__header--right"]}>Create new task</div>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className={styles["modal__icon"]}
							onClick={closeModal}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</div>
				</div>

				<div className={styles["modal__body"]}>
					{/* <div
						className={styles["modal__body--title"]}
						onChange={onChangeHandler}
						contentEditable></div> */}

					<TextField placeholder='Untitled' title />

					<div className={styles["modal__body--task__detail"]}>
						<div className={styles["modal__body--task__detail--left"]}>
							<div>Status</div>
							<div>Assign</div>
							<div>Backlog</div>
						</div>
						<div className={styles["modal__body--task__detail--right"]}>
							<div className={styles["select"]}>
								<Select placeholder='Assign a member' />
							</div>
							<div>{/* <Select placeholder='Assign a member' /> */}</div>
							<div>{/* <Select placeholder='Assign a member' /> */}</div>
						</div>
					</div>

					<Textarea />
				</div>

				<div className={styles["modal__footer"]}>
					<Button>Create</Button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
