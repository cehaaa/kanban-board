import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import Badge from "../../Atoms/Badge/Badge";
import Button from "../../Atoms/Button/Button";
import AvatarGroup from "../../Molecules/AvatarGroup/AvatarGroup";

import { selectSelectedTask } from "../../../slices/tasks/tasksSlices";
import { setShowSideTask } from "../../../slices/sidePeek/sidePeek";

import styles from "./SideTask.module.scss";

const SidePeek = ({}) => {
	const sideTaskWrapper = useRef(null);
	const dispatch = useDispatch();

	const selectedTask = useSelector(selectSelectedTask);

	const close = () => {
		sideTaskWrapper.current.classList.add(
			styles["side__task__container--close"]
		);

		dispatch(setShowSideTask());
	};

	return (
		<div
			className={styles["side__task__container"]}
			onClick={close}
			ref={sideTaskWrapper}
		>
			<div className={styles["side__task"]} onClick={e => e.stopPropagation()}>
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
