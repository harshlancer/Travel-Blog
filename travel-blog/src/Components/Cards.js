import React from "react";
import pic from "../images/pic.jpg";
import pin from "../images/outline_place_black_24dp.png";

export default function Cards(props) {
  return (
    <div className="card">
      <div >
        <img src={props.image}className="cardImg"></img>
      </div>

      <div className="stats">
        <location>
          <span>
            <img src={pin} className="locationLogo"></img>
          </span>

          <span>{props.location}</span>

          <span>
            <a href={props.url}>View on Google Maps</a>
          </span>
        </location>

        <date>
          <h2 className="title">{props.title}</h2>
          <span className="dateText">
            {props.start}-{props.end}
          </span>
          <p className="description">{props.description}</p>
        </date>
      </div>
    </div>
  );
}
