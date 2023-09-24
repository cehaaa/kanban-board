import React from "react";

import styles from "./Textarea.module.scss";

const Textarea = ({ value, setValue, placeholder = "" }) => {
	const onChangeHandler = e => {
		setValue(e.target.value);
	};

	return (
		<textarea
			className={styles["textarea"]}
			onChange={onChangeHandler}
			placeholder={placeholder}
			value={value}></textarea>
	);
};

export default Textarea;
