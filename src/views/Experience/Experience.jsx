import React from "react";
import "./Experience.css";

function TimeLineItem(props) {
    return (
        <div className="timeline-item"
            onClick={() => {
                props.setActiveTitle(props.title);
            }} >
            <h1 className="timeline-title"> {props.title}</h1>
        </div>
    )
}

export default function ExperienceScreen() {
    const [activeTitle, setActiveTitle] = React.useState('BLANK');
    return (
        <div className="screen-background">
            <div className="experience-background">
                <div className="timeline-background">
                    <TimeLineItem
                        title="Camp Counselor"
                        setActiveTitle={setActiveTitle} />
                    <TimeLineItem
                        title="Lifeguard"
                        setActiveTitle={setActiveTitle}/>
                </div>
                <div className="highlight-background">
                    <h1>{activeTitle}</h1>
                </div>
            </div>
        </div>
    );
}
