import React from 'react'
import "./About.css"
import "../App.css"

function About() {
	return (
		<section className="about-container" id="about">
			<h2 className="title" >About</h2>
			<div className="about-detail">
				<div className="about-article-all">
					<img src={`${process.env.PUBLIC_URL}/img/logo-musu.png`} alt="logo2" className="about-logo" />
					<div className="about-article">
						<h3 className="contents-title">『 楚々 』について</h3>
						<p className="contents">
							自分らしく生きることを大切に<br />観て触れて整うことで本来の自分に繋がる<br />自分を整え輝くための作品を<br />ひとつひとつ心を込めてお創りしています。
						</p>
					</div>
				</div>
			</div>
		</section>


	)
}

export default About
