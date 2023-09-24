import React from "react";

import styles from "./Header.module.scss";

const Header = ({ children }) => {
	return (
		<div className={styles["modal__header"]}>
			{children}

			{/* <div className={styles["modal__header--right"]}>Create new task</div> */}
			{/* <div>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className={styles["modal__icon"]}
					onClick={closeModal}>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M6 18L18 6M6 6l12 12'
					/>
				</svg>
			</div> */}
		</div>
	);
};

export default Header;
