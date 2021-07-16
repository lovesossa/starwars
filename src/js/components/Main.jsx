import React, { Component } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default class Main extends Component {

	state = {

	};

	render() {

		return (
			<div className="wrapper">
				<Header />
				<div className="base">
					<main className="main" >
						<section className='section'>
							<div className="section_in">
							</div>
						</section>
					</main>
				</div>
				<Footer />
			</div>
		);
	};
}