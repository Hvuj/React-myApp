import React from "react";

const Witcher = ({ witchers }) => {
	// console.log(props);
	console.log({ witchers });
	// const { witchers } = props;
	// const witcherList = witchers.map((witcher) => {
	// 	if (witcher.age > 20) {
	// 		return (
	// 			<div className="witcher" key={witcher.id}>
	// 				<div>Name: {witcher.name}</div>
	// 				<div>age: {witcher.age}</div>
	// 				<div>Belt: {witcher.belt}</div>
	// 			</div>
	// 		);
	// 	} else {
	// 		return null;
	// 	}
	// });
	const witcherList = witchers.map((witcher) => {
		return witcher.age > 20 ? (
			<div className="witcher" key={witcher.id}>
				<div>Name: {witcher.name}</div>
				<div>age: {witcher.age}</div>
				<div>Belt: {witcher.belt}</div>
			</div>
		) : null;
	});
	return <div className="witcher-list">{witcherList}</div>;
};

export default Witcher;
