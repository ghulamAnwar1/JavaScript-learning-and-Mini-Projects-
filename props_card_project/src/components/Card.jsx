import React from "react";
import { Bookmark } from "lucide-react";
const Card = (props) => {
  console.log(props.company);
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={props.brandLogo} alt="" />
          <button>
            Save <Bookmark size={12} />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.company} <span>5 days ago</span>{" "}
          </h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <div>
            <h3>`$ {props.pay}/hr` </h3>

            <p>Karachi,Pakistan</p>
          </div>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
