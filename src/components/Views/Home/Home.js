import React from "react";

import Board from "./../../Templates/Board/Board";

import styles from "./Home.module.scss";

const Home = () => {
	return (
		<>
			<div className={styles["home__container"]}>
				<Board />
			</div>
		</>
	);
};

export default Home;
