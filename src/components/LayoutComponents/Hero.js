import React from "react"

const Hero = ({ mainText, subText }) => {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{mainText}</h1>
          <h2 className="subtitle">{subText}</h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
