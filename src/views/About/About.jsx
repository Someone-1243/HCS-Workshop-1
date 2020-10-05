import React from "react";
import "./About.css";
import me from "../../assets/Justin.jpg";

function ViewBtn(props) {
    return (
        <div className="view-button"
            onClick={() => {
                props.setViewMore(!props.viewMore)
            }} >
            <h1>{props.str}</h1>
        </div>
    )
}

export default function AboutScreen() {
    const [viewMore, setViewMore] = React.useState(false)
    if (viewMore) {
        return (
            <div className="screen-background">
                <div className="intro-background">
                    <div className="intro-item">
                        <img src={me} className="intro-picture" />
                    </div>
                    <div className="intro-item">
                        Wow wow wow! Justin is a pretty cool person! check out all these
                        details
                    </div>
                    
                </div>
                <ViewBtn
                    setViewMore={setViewMore}
                    viewMore={true}
                    str="View Less" />
            </div>
        );
    }
    else {
        return (
            <div className="screen-background">
                <div className="intro-background">
                    <div className="intro-item">
                        <img src={me} className="intro-picture" />
                    </div>
                    <div className="intro-item">
                        Wow wow wow! Justin is a pretty cool person! check out all these
                        details
                    </div>
                </div>
                <ViewBtn setViewMore={setViewMore}
                    viewMore={false}
                    str="View More" />
            </div>
        );
    }
}
