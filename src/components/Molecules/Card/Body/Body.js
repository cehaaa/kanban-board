import React from "react";

import styles from "./../Card.module.scss";

const Body = ({ children }) => {
	return <div className={styles["task__body"]}>{children}</div>;
};

export default Body;
