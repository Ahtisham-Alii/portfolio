import React from 'react'
import "../style/project.css"

const Projects = () => {
  return (
    <main className='proj'>
        <div className='proj-cont'>
            <h2 className='title1'>My Projects</h2>
            <p className='title1'>Following Below Projects Are The Projects Of Me Which I Created Using HTML,CSS, Tailwind CSS Typescript And Next.js </p>
        </div>
        <div className='projj'>
            <div className='box'>
                <a href="https://milestone5-one-delta.vercel.app/" target='_blank'>
                <img src="pic.jpg" alt="resume-builder" className='imgg'/>
                </a>
            </div>
            <div className='box'>
              <a href="https://assignment-five-sepia.vercel.app/" target='_blank'><img src="/pj2.png" alt="project2" className='imgg' /></a>
            </div>
            <div className='box'>
              <a href="https://milestone1-2-gamma-eight.vercel.app/" target='_blank'><img src="/pj3.jpg" alt="proj3" className='imgg'/></a>
            </div>
        </div>
    </main>
  
  )
}

export default Projects