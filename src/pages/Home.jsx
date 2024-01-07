import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import jsonData from "../data/data.json";

const Home = () => {
	const [data, setData] = useState([]);

	const fetchData = () => {
		const data = jsonData.data;
		setData(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="home-container">
			<ul>
				{Array.isArray(data) && data.length > 0 ? (
					data.map((elem, i) => (
						<NavLink key={i} to={"/data/" + elem.category}>
							<li>{elem.categoryName}</li>
						</NavLink>
					))
				) : (
					<p>Loading...</p>
				)}
			</ul>
		</div>
	);
};

export default Home;
