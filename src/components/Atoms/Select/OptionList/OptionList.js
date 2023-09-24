import React from "react";

import styles from "./OptionList.module.scss";

const OptionList = ({ options, selectedOption, selectOption }) => {
	return (
		<div className={styles["options__option"]}>
			{options.map((option, index) => {
				return (
					<div
						key={index + 1}
						onClick={() => selectOption(option)}
						className={`${styles["option"]} ${
							selectedOption.includes(option) && styles["option--active"]
						}`}>
						{option}
					</div>
				);
			})}
		</div>
	);
};

export default OptionList;
