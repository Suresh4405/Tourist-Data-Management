import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import toast from "../assets/toast.png"
import "./alert.css"



const Newalert = () => {

    const [hide,sethide]=useState(true)

const Xboxed=()=>{
    sethide(!hide)
}

    return (
        <div className='Center-t'>
            
            <Toast>
           
      { hide &&    
     <div>
         <button className='close-but' onClick={Xboxed}>{!hide} X</button>
        <img src={toast} className='toast-img' alt="" />

      <h3 className='ddword'>Data Added Sucessfully</h3>
      </div>
}
    </Toast>

      
        </div>
    );
}

export default Newalert;
