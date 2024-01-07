import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import jsonData from "../data/data.json";

const Data = () => {
	const [data, setData] = useState([]);

	const params = useParams();
	const fetchData = () => {
		const data = jsonData.data;
		const categoryData = data.filter(
			(elem) => elem.category === parseInt(params.id)
		);

		const filteredData = categoryData[0].words;
		setData(filteredData);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="home-container">
			<ul>
				{Array.isArray(data) && data.length > 0 ? (
					data.map((elem, i) => (
						<NavLink key={i}>
							<span>{elem.korean} </span> <br />
							<span>{elem.english} </span>
						</NavLink>
					))
				) : (
					<p>Loading...</p>
				)}
			</ul>
		</div>
	);
};

export default Data;
