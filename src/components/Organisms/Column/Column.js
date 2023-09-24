import React from "react";

import Task from "../../Molecules/Task/Task";

import styles from "./Column.module.scss";

const Column = ({ column, tasks }) => {
	return (
		<div className={styles["column__container"]}>
			<div className={styles["column__header"]}>
				<div className={styles["title"]}>{column}</div>
				<div className={styles["amount"]}>{tasks.length}</div>
			</div>

			{/* <TaskGroup tasks={tasks} /> */}

			<div className={styles["column__tasks"]}>
				{tasks.map((task, index) => {
					return <Task key={task.id} task={task} />;
				})}
			</div>
		</div>
	);
};

export default Column;
