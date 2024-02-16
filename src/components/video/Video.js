import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
const Video = () => {
	return (
		<div className="video">
			<div className="video__top">
				<img
					src="https://i.ytimg.com/vi/EgDmCbhmstU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0aERULMtdtDP9FFRRn4JuQqsl1A"
					alt=""
				/>
				<span>05:43</span>
			</div>
			<div className="video__title">
				Create app in 5 minutes using React js and redux
			</div>
			<div className="video__details">
				<span>
					<AiFillEye /> 5m Views •
				</span>
				<span>5 days ago</span>
			</div>
			<div className="video__channel">
				<img
					src="https://yt3.ggpht.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s68-c-k-c0x00ffffff-no-rj"
					alt=""
				/>
				<p>Rainbow Hat</p>
			</div>
		</div>
	);
};

export default Video;
