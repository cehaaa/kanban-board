import React from "react";

import styles from "./../Card.module.scss";

function Footer({ children }) {
	return <div className={styles["task__footer"]}>{children}</div>;
}

export default Footer;
