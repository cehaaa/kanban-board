import React from "react";

import styles from "./Button.module.scss";

const Button = ({
	children,
	variant = "secondary",
	size = "base",
	onClick,
}) => {
	const className = `
    ${styles["button"]}
    ${styles[`button--${variant}`]}
    ${styles[`button--${size}`]}
  `;
	return (
		<>
			<button className={className} onClick={onClick}>
				{children}
			</button>
		</>
	);
};

export default Button;
