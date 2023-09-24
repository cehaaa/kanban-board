import React, { useState } from "react";

import SelectedOptionList from "./SelectedOptionList/SelectedOptionList";
import OptionList from "./OptionList/OptionList";

import styles from "./Select.module.scss";

const Select = ({
	placeholder,
	selectedOption,
	setSelectedOption,
	options,
}) => {
	const [showOptions, setShowOptions] = useState(false);

	const selectOption = option => {
		if (selectedOption.includes(option)) {
			const filtered = selectedOption.filter(item => item !== option);
			setSelectedOption(filtered);
			return;
		}
		setSelectedOption([...selectedOption, option]);
	};

	if (showOptions) {
		window.addEventListener("keydown", e => {
			if (e.key === "Escape") {
				setShowOptions(false);
			}
		});
	}

	return (
		<div
			className={styles["select"]}
			onClick={e => setShowOptions(!showOptions)}>
			<SelectedOptionList
				selectedOption={selectedOption}
				placeholder={placeholder}
			/>

			{showOptions && (
				<div
					className={styles["options__wrapper"]}
					onClick={e => e.stopPropagation()}>
					<div className={styles["options__header"]}>
						<SelectedOptionList
							selectedOption={selectedOption}
							placeholder={placeholder}
						/>

						<div onClick={e => setShowOptions(!showOptions)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className={styles["close__icon"]}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</div>
					</div>

					<OptionList
						options={options}
						selectedOption={selectedOption}
						selectOption={selectOption}
					/>
				</div>
			)}
		</div>
	);
};

export default Select;
