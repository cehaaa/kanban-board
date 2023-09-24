import React from "react";

import styles from "./Footer.module.scss";

const Footer = ({ children }) => {
	return <div className={styles["modal__footer"]}>{children}</div>;
};

export default Footer;
