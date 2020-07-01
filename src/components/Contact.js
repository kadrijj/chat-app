import React from "react";
import "./Contact.css";

function Contact() {

    const avatar= "https://randomuser.me/api/portraits/women/52.jpg"
    const name= "June Reyes"

    return(
        <div className="Contact"> 
          <img className="avatar" src={avatar}/>
          <div>
            <p>{name}</p>
            <div className="status">
              <div className="status-online"></div>
              <p className="status-text">online</p>
            </div>
          </div>

        </div>  
      );

}

export default Contact;