import React from 'react'
import "./aboutContainer.sass";

type Props = {}

const About = (props: Props) => {
  return (
    <div className="container">
    <div id="bio">
      <p>Oi! meu nome é <span>Mateus</span> mas a maioria me chama de <span>Lange</span></p>
    </div>
  </div>
  )
}

export default About