import React from "react";

import styles from "./Task.module.scss";
import { useDispatch } from "react-redux";

import BadgeGroup from "../../Molecules/BadgeGroup/BadgeGroup";
import AvatarGroup from "../../Molecules/AvatarGroup/AvatarGroup";

import { setSelectedTask } from "../../../slices/tasks/tasksSlices";

import { open as openSidePeek } from "../../../slices/sidePeek/sidePeek";

const Task = ({ task }) => {
	const dispatch = useDispatch();

	const onClickHandler = task => {
		dispatch(setSelectedTask(task));
		dispatch(openSidePeek());
	};

	return (
		<div
			className={styles["task__container"]}
			onClick={() => onClickHandler(task)}
		>
			{task.tags && <BadgeGroup tags={task.tags} />}

			<div className={styles["task__body"]}>
				<div className={styles["task__title"]}>{task.title}</div>
				<div className={styles["task__text"]}>
					{task.description === ""
						? "This user is to lazy to write a description"
						: task.description}
				</div>
			</div>
			{task.members.length >= 1 ? (
				<div className={styles["task__footer"]}>
					<AvatarGroup members={task.members} />
				</div>
			) : null}
		</div>
	);
};

export default Task;
