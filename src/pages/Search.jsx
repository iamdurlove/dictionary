import jsonData from "../data/data.json";
import React, { useState } from "react";

const WordList = ({ words }) => (
	<ul>
		{words.map((word) => (
			<li key={word.id}>
				{word.korean} <br />
				{word.english}
			</li>
		))}
	</ul>
);

const SearchComponent = ({ data }) => {
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredWords, setFilteredWords] = useState([]);

	const handleSearch = () => {
		const lowercaseQuery = searchQuery.toLowerCase();
		const matchingWords = data.reduce((acc, category) => {
			const matchingWordsInCategory = category.words.filter(
				(word) =>
					word.korean.toLowerCase().includes(lowercaseQuery) ||
					word.english.toLowerCase().includes(lowercaseQuery)
			);
			if (matchingWordsInCategory.length > 0) {
				acc.push({
					categoryName: category.categoryName,
					words: matchingWordsInCategory,
				});
			}
			return acc;
		}, []);

		setFilteredWords(matchingWords);
	};

	return (
		<div className="input-div">
			<input
				type="text"
				placeholder="Search for words..."
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<button onClick={handleSearch}>Search</button>

			{filteredWords.length > 0 ? (
				<div className="search-results">
					<p>Search Results:</p>
					{filteredWords.map((category) => (
						<div
							className="search-results-category"
							key={category.categoryName}
						>
							{/* <h3>{category.categoryName}</h3> */}
							<WordList words={category.words} />
						</div>
					))}
				</div>
			) : (
				<p>No matching results found.</p>
			)}
		</div>
	);
};

const App = () => {
	return (
		<div className="search-container">
			{/* <h2>Korean-English Dictionary</h2> */}
			<SearchComponent data={jsonData.data} />
		</div>
	);
};

export default App;
