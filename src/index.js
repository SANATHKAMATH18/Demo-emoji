import React from "react";
import ReactDom from "react-dom";
import me from "./images/Me.jpeg"
import anna from "./images/Anna.jpeg"
import amma from "./images/Amma.jpeg"
import rakshu from "./images/Mankad.jpeg"

function Contact(props)
{
  return (
    <div className="card">
      <h1 className="name">Name= {props.name}</h1>
      <img className="img"
        src={props.image}
        alt="image_of_contact"
      />
      <h2 className="pno">Phone number={props.num}</h2>
      <p className="email">{props.email} </p>
    </div>
  );
}
ReactDom.render(
  <div>
  <ol>
  <li>
    <Contact
      name="Satish Kamath"
      image={anna}
      num="9341241907"
      email="sathyakamrk@gmail.com"
    />
    </li>
    <li>
    <Contact
      name="Reshma Kamath"
      image={amma}
      num="8310964437"
      email="reshmakamath79@gmail.com"
    /></li>
    <li>
    <Contact
      name="Sanath Kamath"
      image={me}
      num="9019812954"
      email="sanathkamath1818@gmail.com"
    />
    </li>
    <li>
    <Contact
      name="Raksheeth Kamath"
      image={rakshu}
      num="8310752659"
      email="raksheethkamath7@gmail.com"
    />
    </li>
</ol>
  </div>,
  document.getElementById("root")
);
