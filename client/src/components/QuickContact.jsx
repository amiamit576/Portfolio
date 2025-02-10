import React, { useState } from 'react'
import './QuickContact.css';

function QuickContact() {
    let[form,setForm]=useState(false)
    function toggelForm(){
        return setForm(!form)
    }
    function closeForm(){
        setForm(false);
    }
  return (
    <div className="quick-contact-container">
    <button className="custom-btn" onClick={toggelForm}>QuickContact</button>
    {form && <div className='container'><span onClick={closeForm} style={{position: 'absolute',top: '10px',right: '10px',cursor: 'pointer',fontWeight: 'bold',fontSize: '20px'
            }}>&times;</span>
        <h2 className='NeedHelp--title'>Quick Contact</h2>
        <form>
        <div className="form-group bg-[#f2f2f2] m-[2px] pb-[1px]">
          <label className="flex items-center w-full">
          <span className="mr-2 text-[#706e6e]">Name:</span>
          <input className="inpt flex-1 focus:outline-none" type="text" />
          </label>
        </div>

        <div className="form-group bg-[#f2f2f2] m-[2px] pb-[1px]">
          <label className="flex items-center w-full">
          <span className="mr-2 text-[#706e6e]">Email:</span>
          <input className="inpt flex-1 focus:outline-none" type="text" />
          </label>
        </div>

        <div className="form-group bg-[#f2f2f2] m-[2px] pb-[1px]">
          <label className="flex items-center w-full">
          <span className="mr-2 text-[#706e6e]">Contact:</span>
          <input className="inpt flex-1 focus:outline-none" type="text" />
          </label>
        </div>
            
        <div className="form-group bg-[#f2f2f2] m-[2px] pb-[1px]">
        <textarea className="inpt w-full   focus:outline-none" placeholder="Your message"></textarea>
        </div>    
        <button className='btnsubmit w-full'>Submit</button>
        </form>
        
        </div>}
    </div>
  )
}

export default QuickContact