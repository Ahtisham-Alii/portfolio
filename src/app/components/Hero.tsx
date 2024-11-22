import "../style/hero.css"
import Image from "next/image"
import React from 'react'

const Hero = () => {
  return (
    <div className="bg">
        <div className="bg-box">
            <div className="left">
                <h1 className="title">I'm <br />Ahtisham Ali Siddiqui.<br />
                    Front-End Developer</h1>
                    <p className="des"><mark>Ahtisham Ali Siddiqui,</mark> is A Front-end Developer From Karachi, Pakistan. Currently He Is a GIAIC student. Learning Artificial Inteligence, Web 3.0 And MetaVerse. </p>

                    <button className="btn">Hire Me</button>
            </div>
            <div>
                <Image src={"/pp.jpg"} alt="profile"
                width={200}
                height={200} className="img"/>

            </div>
        
        </div>
    </div>
  )
}

export default Hero