import '../constants/styles/TimeLine.css'

import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import events from "./events.json";

const TimeLine = ({timeLineRef}) => {

    return (
        <div className="TimeLine" ref={timeLineRef}>
            <VerticalTimeline>
                {events.map((event, index) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={event.date}
                        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
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

export default TimeLine;