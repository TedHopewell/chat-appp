import React from 'react'
import upload from '../images/images.png'
import attach from '../images/download.png'
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='type something...'/>
      <div className="send">
        {/* <img src={attach} alt="" /> */}
        <input type="file" style={{display:'none'}} id='file'/>
        <label htmlFor="file">
          <img src={upload} alt="" style={{height:30}} />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input