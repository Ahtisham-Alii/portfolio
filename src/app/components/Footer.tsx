import "../style/footer.css"
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
const Footer = () => {
  return (
    <footer className='footer'>
        <div>
        <p>All Rights Reserved Classy1One PVT 2024 &copy;</p>
        <br />
        <a href="https://github.com/Ahtisham-Alii" target="_blank">
        <FaGithub  className="iicons" />
        </a>
        <a href="https://www.linkedin.com/in/ahtisham-ali-siddiqui-35b095311/" target="_blank">
        <FaLinkedin className="iicons" />
        
        </a>
        <a href="https://vercel.com/ahtisham-alis-projects" target="_blank">
        <SiVercel className="iicons" />
        
        </a>
        </div>
        </footer>
         
  )
}

export default Footer