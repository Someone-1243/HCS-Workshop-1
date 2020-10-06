import React from "react";
import Project from "../../components/Project/Project"

export default function ProjectsScreen() {
    return (
        <div className="screen-background">
            <h1> Projects </h1>
            <Project
                title="HCS-Workshop-1"
                link= "https://github.com/Someone-1243/HCS-Workshop-1" >
            </Project>
            <Project
                title="Robot Drawing Machine"
                link="https://github.com/jimwu6/RobotDrawer" >
            </Project>
            <Project
                title="Basic Snake Game"
                link="https://github.com/Someone-1243/crimtech-comp-f20" >
            </Project>
        </div>
    );
}
