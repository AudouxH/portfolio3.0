import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import events from '../assets/events.json';

import "react-vertical-timeline-component/style.min.css";
import '../assets/styles/timeline.css';
import Title from "../components/title";

const TimelineScreen = ({ timelineRef }) => {
    return (
        <div className="timelineScreen" ref={timelineRef}>
            <Title text={"Experiences"} isWhite/>
            <VerticalTimeline>
                {events.map((event, index) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={event.date}
                        iconStyle={{ background: "#141099", color: "#141099" }}
                        key={index}>
                        <h3
                            className="vertical-timeline-element-title"
                            dangerouslySetInnerHTML={{ __html: event.event }} />
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}

export default TimelineScreen;
