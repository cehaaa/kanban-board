import React from "react";

import styles from "./Badge.module.scss";

const Badge = ({ children, variant }) => {
	const mapVariant = {
		design: styles["badge--blue"],
		website: styles["badge--lime"],
		app: styles["badge--rose"],
		dribbble: styles["badge--yellow"],
	};

	return (
		<div className={`${styles["badge"]} ${mapVariant[variant]}`}>
			{children}
		</div>
	);
};

export default Badge;
