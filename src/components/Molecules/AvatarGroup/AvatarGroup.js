import React from "react";

import styles from "./AvatarGroup.module.scss";

import Avatar from "../../Atoms/Avatar/Avatar";

export const AvatarGroup = ({ members = [] }) => {
	return (
		<div className={styles["avatar__wrapper"]}>
			{members.map((person, index) => {
				return <Avatar key={index} person={person} />;
			})}
		</div>
	);
};

export default AvatarGroup;
