import React from "react";
import "./Education.css";

function EducationItem(props) {
    if (props.state == props.set) {
        return (
            <div className="education-item"
                onClick={() => {
                    props.setState(props.set)
                }} >
                <div className="header">
                    <h1 className="timeline-title"> {props.title}</h1>
                    <h2 className="year"> {props.year}</h2>
                </div>
                <div className="descript">
                    <br/>
                    <h2>{props.subtitle}</h2>
                    <p>{props.description}</p>
                    <p>{props.description2}</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="education-item"
                onClick={() => {
                    props.setState(props.set)
                }} >
                <div className="header">
                    <h1 className="timeline-title"> {props.title}</h1>
                    <h2 className="year"> {props.year}</h2>
                </div>
            </div>
        )
    }
}

export default function EducationScreen() {
    const [state, setState] = React.useState(0);
    return (
        <div className="screen-background">
            <div className="education-background">
                <div className="timeline-background">
                    <EducationItem className="education-item"
                        title="Harvard College"
                        year="2020-2024"
                        subtitle="Likely Computer Science Concentrator"
                        description={"Currently undeclared major"}
                        description2={"Current courses are CS50, Math 21A, GENED 1102, FRSEMR 51C"}
                        set={1}
                        state={state}
                        setState={setState}/>

                    <EducationItem className="education-item"
                        title="Marc Garneau C.I."
                        year="2016-2020"
                        subtitle="TOPS Program at Marc Garneau CI, Toronto, CAN"
                        description="Math-, Science-, and English-focused program in Toronto; among the most prestigious public high schools in the city"
                        description2="Studied AP Physics, AP Calculus BC, AP CS A"
                        state={state}
                        set={2}
                        setState={setState}/>

                    <EducationItem className="education-item"
                        title="Academic Awards"
                        year="from 2020-2024"
                        subtitle="Math Competitions"
                        description="AIME Qualifier 2019, 2020"
                        description2="COMC Score of 66/80, qualifying for CMO Repechage"
                        set={3}
                        state={state}
                        setState={setState}/>
                </div>
            </div>
        </div>
    );
}
