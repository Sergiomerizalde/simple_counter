import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	console.log(props);
	return (
		<div className="bg-primary display-2 d-flex justify-content-center">
			<div>⏳</div>
			<div className="text-warning">{props.hora1}</div>
			<div className="text-warning">{props.hora}</div>
			<div className="text-warning">:{props.minuto1}</div>
			<div className="text-warning">{props.minuto}</div>
			<div className="text-warning">:{props.segundo1}</div>
			<div className="text-warning">{props.segundo}</div>
		</div>
	);
};

export default Home;
