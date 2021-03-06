import React from "react";
import "./About.css";
import me from "../../assets/Justin.jpg";
import { Link } from 'react-router-dom';

function ViewBtn(props) {
    return (
        <div className="view-button"
            onClick={() => {
                props.setViewMore(!props.viewMore)
            }} >
            <h3>{props.str}</h3>
        </div>
    )
}

export default function AboutScreen() {
    const [viewMore, setViewMore] = React.useState(false)
    if (viewMore) {
        return (
            <div className="screen-background">
                <div className="intro-background">
                    <div className="image-panel">
                        <img src={me} className="intro-picture" />
                    </div>
                    <div className="intro-item">
                        <h1> JUSTIN YE </h1>
                        <h2> School: Harvard College</h2>
                        <h2> Year:  Class of 2024 </h2>
                        <h2> Concentration: CS </h2>
                        <p> 
                            Hey everyone!
                            <br/>
                            <br/>
                            As a first-year student and a prospective computer science concentrator, I'm
                            super interested in the implications of machine learning for the future.
                            Specifically, I'm interested in how leveraging machine learning can lead to better,
                            greener design and what role it can play in the development of new technologies.
                            I'm also interested in the role of ethics the field of machine learning.
                            <br />
                            <br />
                            Apart from this, I also love being involved with photography and design.
                            I strive to bring a design mindset to most of my long-term projects, as it is important to me
                            that the user experience is as easy as possible. 
                        </p>
                        <ViewBtn
                            setViewMore={setViewMore}
                            viewMore={true}
                            str="View Less" />
                    </div>
                </div>

                <div className="contact-bar">
                    {<p className="info-item">justinye@college.harvard.edu</p>}
                </div>
                {<div className="info-bar">
                    <Link className="info-link"
                        to={{ pathname: "https://www.facebook.com/profile.php?id=100010354304981" }}
                        target="_blank">
                        Facebook
                            </Link>

                    <Link className="info-link"
                        to={{ pathname: "https://github.com/Someone-1243" }}
                        target="_blank">
                        GitHub
                            </Link>

                    <Link className="info-link"
                        to={{ pathname: "https://www.linkedin.com/in/justin-ye-1a1507190/" }}
                        target="_blank">
                        LinkedIn
                            </Link>
                </div>}
            </div>
        );
    }
    else {
        return (
            <div className="screen-background">
                <div className="intro-background">
                    <div className="image-panel">
                        <img src={me} className="intro-picture" />
                    </div>
                    <div className="intro-item">
                        <h1> JUSTIN YE </h1>
                        <h2> School: Harvard College</h2>
                        <h2> Year:  Class of 2024 </h2>
                        <h2> Concentration: CS </h2>

                        <ViewBtn setViewMore={setViewMore}
                            viewMore={false}
                            str="Hear from Me" />
                    </div>
                </div>
                <br />
                <br/> 
                <div className="contact-bar">
                    {<p className="info-item">justinye@college.harvard.edu</p>}
                </div>
                {<div className="info-bar">
                    <Link className="info-link"
                        to={{ pathname: "https://www.facebook.com/profile.php?id=100010354304981" }}
                        target="_blank">
                        Facebook
                            </Link>

                    <Link className="info-link"
                        to={{ pathname: "https://github.com/Someone-1243" }}
                        target="_blank">
                        GitHub
                            </Link>

                    <Link className="info-link"
                        to={{ pathname: "https://www.linkedin.com/in/justin-ye-1a1507190/" }}
                        target="_blank">
                        LinkedIn
                            </Link>
                </div>}
                
            </div>
        );
    }
}
