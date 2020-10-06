import React from "react";
import "./Experience.css";

function TimeLineItem(props) {
    return (
        <div className="timeline-item"
            onClick={() => {
                props.setActiveTitle(props.title);
                props.setDescription(props.description);
                props.setYear(props.year);
                props.setT2(props.title2);
            }} >
            <h1 className="timeline-title"> {props.title}</h1>
            <h2 className="year"> {props.year}</h2>
        </div>
    )
}

export default function ExperienceScreen() {
    const [activeTitle, setActiveTitle] = React.useState('');
    const [year, setYear] = React.useState('');
    const [title2, setT2] = React.useState('');
    const [description, setDescription] = React.useState('');

    if (activeTitle != '') {
        return (
            <div className="screen-background">
                <div className="experience-background">
                    <div className="timeline-background">
                        <div className="break" />
                        <h1 className="involvement-category"> HARVARD COLLEGE </h1>
                        <TimeLineItem
                            title="Harvard Computer Society"
                            setActiveTitle={setActiveTitle}
                            title2="Comper"
                            setT2={setT2}
                            year="2020-"
                            setYear={setYear}
                            description="Currently comping (applying to) the Harvard Computer Society."
                            setDescription={setDescription} />
                        <TimeLineItem
                            title="Harvard Open Data Project"
                            setActiveTitle={setActiveTitle}
                            title2="Comper"
                            setT2={setT2}
                            year="2020-"
                            setYear={setYear}
                            description="Currently comping (applying to) the Harvard Open Data Project."
                            setDescription={setDescription} />
                        <TimeLineItem
                            title="The Harvard Crimson"
                            setActiveTitle={setActiveTitle}
                            title2="Comper"
                            setT2={setT2}
                            year="2020-"
                            setYear={setYear}
                            description="Currently comping (applying to) the Harvard Crimson. More specifically, comping 
                                to web design, print design, multimedia, tech, and editorial."
                            setDescription={setDescription} />

                        <h1 className="involvement-category"> MARC GARNEAU C.I. </h1>
                        <TimeLineItem
                            title="TOPS Program Yearbook"
                            setActiveTitle={setActiveTitle}
                            title2="Senior Editor"
                            setT2={setT2}
                            year="2019-2020"
                            setYear={setYear}
                            description="Organized the creation of the TOPS Program yearbook.
                                         Managed a team of writers, photographers, and editors while also overcoming
                                         a shortened school year to develop a full yearbook."
                            setDescription={setDescription} />
                        <TimeLineItem
                            title="The Reckoner"
                            setActiveTitle={setActiveTitle}
                            title2="Deputy Editor in Chief, Photography Manager"
                            setT2={setT2}
                            year="2019-2020"
                            setYear={setYear}
                            description="Led team of photographers to photograph school events for award-winning 
                                        Toronto high school newspaper. Also ran workshops to improve photography on the board.
                                        As Deputy EIC, also took on some logistic challenges in terms of distribution."
                            setDescription={setDescription} />
                        <TimeLineItem
                            title="DECA MGCI"
                            setActiveTitle={setActiveTitle}
                            title2="Trainer"
                            setT2={setT2}
                            year="2018-2020"
                            setYear={setYear}
                            description="Competed in DECA and won provincial champion in 2018 in TTDM and in 2020 for ETDM. 
                                        As a trainer, also held workshops and 1-on-1 training to improve our school's overall performance"
                            setDescription={setDescription} />

                        <h1 className="involvement-category"> OTHER INVOLVEMENT </h1>
                        <TimeLineItem
                            title="Lifeguard / APA"
                            setActiveTitle={setActiveTitle}
                            title2="City of Toronto"
                            setT2={setT2}
                            year="2018-2020"
                            setYear={setYear}
                            description="Helped students of all ages learn to swim. Maintained safety of pool environment
                                for all patrons. Trained in first aid and CPR-C by Canada's National Lifesaving Society."
                            setDescription={setDescription} />
                    </div>
                    <div className="highlight-background">
                        <h1>{activeTitle}</h1>
                        <h2 className="title2">{title2}</h2>
                        <h2>{year}</h2>
                        <br />
                        <p>{description} </p>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="screen-background">
                <div className="experience-background">
                    <div className="timeline-background">
                        <div className="break" />
                        <h1 className="involvement-category"> HARVARD COLLEGE </h1>
                        <TimeLineItem
                            title="Harvard Computer Society"
                            setActiveTitle={setActiveTitle}
                            title2="Comper"
                            setT2={setT2}
                            year="2020-"
                            setYear={setYear}
                            description="Currently comping (applying to) the Harvard Computer Society."
                            setDescription={setDescription} />
                        <TimeLineItem
                            title="Harvard Open Data Project"
                            setActiveTitle={setActiveTitle}
                            title2="Comper"
                            setT2={setT2}
                            year="2020-"
                            setYear={setYear}
                            description="Currently comping (applying to) the Harvard Open Data Project."
                            setDescription={setDescription} />
                        <TimeLineItem
                            title="The Harvard Crimson"
                            setActiveTitle={setActiveTitle}
                            title2="Comper"
                            setT2={setT2}
                            year="2020-"
                            setYear={setYear}
                            description="Currently comping (applying to) the Harvard Crimson. More specifically, comping 
                                to web design, print design, multimedia, tech, and editorial."
                            setDescription={setDescription} />

                        <h1 className="involvement-category"> MARC GARNEAU C.I. </h1>
                        <TimeLineItem
                            title="TOPS Program Yearbook"
                            setActiveTitle={setActiveTitle}
                            title2="Senior Editor"
                            setT2={setT2}
                            year="2019-2020"
                            setYear={setYear}
                            description="Organized the creation of the TOPS Program yearbook.
                                         Managed a team of writers, photographers, and editors while also overcoming
                                         a shortened school year to develop a full yearbook."
                            setDescription={setDescription} />
                        <TimeLineItem
                            title="The Reckoner"
                            setActiveTitle={setActiveTitle}
                            title2="Deputy Editor in Chief, Photography Manager"
                            setT2={setT2}
                            year="2019-2020"
                            setYear={setYear}
                            description="Led team of photographers to photograph school events for award-winning 
                                        Toronto high school newspaper. Also ran workshops to improve photography on the board.
                                        As Deputy EIC, also took on some logistic challenges in terms of distribution."
                            setDescription={setDescription} />
                        <TimeLineItem
                            title="DECA MGCI"
                            setActiveTitle={setActiveTitle}
                            title2="Trainer"
                            setT2={setT2}
                            year="2018-2020"
                            setYear={setYear}
                            description="Competed in DECA and won provincial champion in 2018 in TTDM and in 2020 for ETDM. 
                                        As a trainer, also held workshops and 1-on-1 training to improve our school's overall performance"
                            setDescription={setDescription} />

                        <h1 className="involvement-category"> OTHER INVOLVEMENT </h1>
                        <TimeLineItem
                            title="Lifeguard / APA"
                            setActiveTitle={setActiveTitle}
                            title2="City of Toronto"
                            setT2={setT2}
                            year="2018-2020"
                            setYear={setYear}
                            description="Helped students of all ages learn to swim. Maintained safety of pool environment
                                for all patrons. Trained in first aid and CPR-C by Canada's National Lifesaving Society."
                            setDescription={setDescription} />
                    </div>
                    <div className="empty-background">
                    </div>
                </div>
            </div>
        );
    }
}
