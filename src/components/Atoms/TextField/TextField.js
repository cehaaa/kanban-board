import React from "react";

import styles from "./TextField.module.scss";

const TextField = ({ placeholder, value, setValue, title }) => {
	const onChangeHandler = e => {
		setValue(e.target.value);
	};

	return (
		<input
			className={`${styles["input"]} ${title ? styles["input--title"] : ""} `}
			placeholder={placeholder}
			value={value}
			onChange={onChangeHandler}
		/>
	);
};

export default TextField;
