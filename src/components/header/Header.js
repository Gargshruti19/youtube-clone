import React from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
const Header = ({ handleToggleSidebar }) => {
	return (
		<div className=" header">
			<FaBars
				className="header__menu"
				size={26}
				onClick={() => handleToggleSidebar()}
			/>

			<img
				src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
				alt="logo"
				className="header__logo"
			/>
			<form>
				<input type="text" placeholder="Search" />
				<button type="submit">
					<AiOutlineSearch size={22} />
				</button>
			</form>
			<div className="header__icons">
				<MdNotifications size={28} />
				<MdApps size={28} />
				<FaRegUserCircle size={28} />
			</div>
		</div>
	);
};

export default Header;
