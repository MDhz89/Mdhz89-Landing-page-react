import React from "react";


import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
	return (
		<>
		<Navbar title={"Navbar"} link1={"Home"} link2={"About"} link3={"Services"} link4={"Contact"}/>
		<div className="container">
		<Jumbotron/>
		<Card title={"React"} link1={"Find out more"} link2={"Aprendiendo a hacer componentes en mi primer proyecto de react:)"} link4={"row row-cols-1 row-cols-md-2 g-4"} />
		</div>
		<Footer/>
		</>
	);
};

export default Home;
