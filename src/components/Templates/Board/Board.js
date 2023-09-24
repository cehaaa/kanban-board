import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./Board.module.scss";

import Column from "../../Organisms/Column/Column";
import SidePeek from "../../Organisms/SidePeek/SidePeek";

import { selectTasks } from "../../../slices/tasks/tasksSlices";

export const Board = () => {
	const tasks = useSelector(selectTasks);

	const [isShowSidePeek, setIsShowSidePeek] = useState(false);

	const closeSidePeek = useCallback(() => {
		setIsShowSidePeek(false);
	}, []);

	return (
		<>
			<SidePeek isShow={isShowSidePeek} close={closeSidePeek} />

			<div className={styles["board__columns__container"]}>
				{tasks.columns.map((col, index) => {
					return (
						<Column column={col} key={index} tasks={tasks.tasks[col] || []} />
					);
				})}
			</div>
		</>
	);
};

export default Board;
