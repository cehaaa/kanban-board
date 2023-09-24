import React from "react";

import styles from "./BadgeGroup.module.scss";

import Badge from "../../Atoms/Badge/Badge";

const BadgeGroup = ({ tags }) => {
	return (
		<div className={styles["badge__wrapper"]}>
			{tags.map((tag, index) => {
				return (
					// <Badge key={index} variant={tag.toLowerCase()}>
					// 	{tag}
					// </Badge>

					<Badge key={index} variant={tag.toLowerCase()}>
						{tag}
					</Badge>
				);
			})}
		</div>
	);
};

export default BadgeGroup;
