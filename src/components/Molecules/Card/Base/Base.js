import React from "react";

import styles from "./../Card.module.scss";

const Base = ({ children, props }) => {
	return (
		<div className={styles["task__container"]} {...props}>
			{children}
		</div>
	);
};

export default Base;
