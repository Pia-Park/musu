import React from 'react'
import "./About.css"
import "../App.css"

function About() {
	return (
		<section className="about-container">
			<h2 className="title">About</h2>
			<div className="about-detail">
				<img src={`${process.env.PUBLIC_URL}/img/logo-musu.png`} alt="logo2" className="about-logo" />
				<div className="about-article">
					<h3 className="contents-title">『むす』について</h3>
					<p className="contents">
					日本には「結び」という祈りや願いが込められた<br />
					神聖な言葉があります。<br />
					「結び」は「むすひ（産霊）」という言葉から生まれ、<br />
					「むす」には「新しいものを生み出す」<br />
					そして「ご縁を結び繋がる」<br />
					という意味を持ちます。<br />
					「むす」を通じて、本来の自分と繋がり魂が輝き<br />
					自分らしく生きるために、あなたの魂が光輝き心清らかに<br />
					なりますよう願いをこめております。
					</p>
				</div>
			</div>
		</section>


	)
}

export default About
