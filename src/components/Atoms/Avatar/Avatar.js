import React from "react";

import styles from "./Avatar.module.scss";

import IU from "./../../Assets/IU.png";
import Mina from "./../../Assets/mina.png";
import Nayeon from "./../../Assets/nayeon.png";

const Avatar = ({ person }) => {
	const mapVariant = {
		"Lee Ji Eun": styles["avatar--blue"],
		"Myoui Mina": styles["avatar--lime"],
		"Im Nayeon": styles["avatar--rose"],
	};

	const mapImage = {
		"Lee Ji Eun": IU,
		"Myoui Mina": Mina,
		"Im Nayeon": Nayeon,
	};

	return (
		<div
			className={`${styles["avatar"]} ${mapVariant[person]}
  `}>
			{/* {person[0]} */}
			<img src={mapImage[person]} alt={person} />
		</div>
	);
};

export default Avatar;
