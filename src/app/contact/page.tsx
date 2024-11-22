import "../style/contact.css"
import React from 'react'

const Contact = () => {
  return (
    <main className='main'>
        <div className='boxes'>
          <form className='box1'>
          <h1 className="heading"><a href="/Contact.tsx"></a>Contact US</h1>
                <input type="text" className="text1" placeholder="enter your name" /><br />
                <input type="text" className="text1" placeholder="enter your last name"/><br />
                <input type="email" className='text1' placeholder='enter your email' /><br />
                <textarea className="text1" placeholder='send your querries'> </textarea><br />
                <button className='btn1'>Submit</button>

        
            </form>
        </div>
    </main>
  )
}

export default Contact