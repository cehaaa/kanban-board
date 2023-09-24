import React, { useRef, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Badge from "../../Atoms/Badge/Badge";
import Button from "../../Atoms/Button/Button";
import AvatarGroup from "../../Molecules/AvatarGroup/AvatarGroup";

import { selectSelectedTask } from "../../../slices/tasks/tasksSlices";

import {
	isShowSidePeek,
	open as openSidePeek,
	close as closeSidePeek,
} from "../../../slices/sidePeek/sidePeek";

import styles from "./SidePeek.module.scss";

const SidePeek = () => {
	const dispatch = useDispatch();
	const sidePeekWrapper = useRef(null);

	const isShow = useSelector(isShowSidePeek);

	const selectedTask = useSelector(selectSelectedTask);

	const close = useCallback(() => {
		sidePeekWrapper.current.classList.remove(styles["open"]);
		sidePeekWrapper.current.classList.add(styles["close"]);

		dispatch(closeSidePeek());
	}, []);

	const open = useCallback(() => {
		sidePeekWrapper.current.classList.remove(styles["close"]);
		sidePeekWrapper.current.classList.add(styles["open"]);

		dispatch(openSidePeek());
	}, []);

	useEffect(() => {
		isShow ? open() : close();
	}, [isShow]);

	return (
		<div
			className={styles["side__peek__container"]}
			onClick={close}
			ref={sidePeekWrapper}
		>
			<div className={styles["side__peek"]} onClick={e => e.stopPropagation()}>
				<div className={styles["task__header"]}>
					<div className={styles["task__header--left"]}>
						<div className={styles["icon__container"]} onClick={close}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={2}
								stroke='currentColor'
								className={styles["icon"]}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5'
								/>
							</svg>
						</div>
					</div>

					<div className={styles["task__header--right"]}>
						<Button size='sm' type='text'>
							Share
						</Button>
						<Button size='sm' type='text'>
							Assign
						</Button>
					</div>
				</div>

				<div className={styles["task__title"]}>{selectedTask.title}</div>

				<div className={styles["task__information"]}>
					<div className={styles["task__information__group"]}>
						<div className={styles["task__information__label"]}>Status</div>
						<div>
							<Badge variant='app'>Done</Badge>
						</div>
					</div>
					<div className={styles["task__information__group"]}>
						<div className={styles["task__information__label"]}>Members</div>
						<div>
							<AvatarGroup members={selectedTask.members} />
						</div>
					</div>
				</div>

				<div className={""}>{selectedTask.description}</div>
			</div>
		</div>
	);
};

export default SidePeek;
