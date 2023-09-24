import React, { useState, useCallback } from "react";

import Button from "../../Atoms/Button/Button";
import CreateTask from "../../Templates/CreateTask/CreateTask";

import styles from "./Navbar.module.scss";

const Navbar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toogle = useCallback(() => {
		setIsModalOpen(!isModalOpen);
	}, [isModalOpen]);

	return (
		<>
			<nav className={styles["navbar"]}>
				<div className={styles["navbar__brand"]}>Kanban Board</div>
				<Button onClick={toogle}>Create new task</Button>
			</nav>

			{isModalOpen && <CreateTask toogle={toogle} />}
		</>
	);
};

export default Navbar;
