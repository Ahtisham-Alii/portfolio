import React from 'react'
import "../style/feedback.css"

const Feedback = () => {
  return (
    <main className='maiin'>
        <div className='containerr'>
            <form>
                <h2 className='title0'>FeedBack</h2>
                <input type="text" className='form' placeholder='Enter Your Name'  required/><br />
                <input type="text" className='form' placeholder='Enter Your LastName' required/><br />
                <input type="email"className='form'  placeholder ='Enter Your E-mail' required/><br />
                <textarea className='form' placeholder='Give Your Valuable FeedBack.  '></textarea><br />
                <button className='btn0'>Submit</button>
                           
                           </form>
        </div>
    </main>
  )
}

export default Feedback