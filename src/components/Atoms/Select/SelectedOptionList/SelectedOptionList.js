import React from "react";

import styles from "./SelectedOptionList.module.scss";

const SelectedOptionList = ({
	selectedOption = [],
	placeholder = "Select an option",
}) => {
	return (
		<div className={styles["selected__option__list"]}>
			{selectedOption.length <= 0
				? placeholder
				: selectedOption.map((item, index) => {
						return (
							<div key={index + 1} className={styles["option"]}>
								{item}
							</div>
						);
				  })}
		</div>
	);
};

export default SelectedOptionList;
