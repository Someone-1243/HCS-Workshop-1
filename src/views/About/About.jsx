import React from "react";
import "./About.css";
import me from "../../assets/Justin.jpg";

export default function AboutScreen() {
    return (
        <div className="screen-background">
            <div className="intro-background">
                <div className="intro-item">
                    <img src={me} className = "intro-picture"/>
                </div>
                <div className="intro-item">
                    Wow wow wow! Justin is a pretty cool person! check out all these
                    details
                </div>
            </div>
        </div>
  );
}
