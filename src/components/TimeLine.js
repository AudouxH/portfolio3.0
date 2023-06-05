import '../constants/styles/TimeLine.css'

import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import events from "./events.json";

const TimeLine = ({timeLineRef}) => {

    return (
        <div className="timeline" ref={timeLineRef}>
            <p className='title'>Experience</p>
            <VerticalTimeline>
                {events.map((event, index) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={event.date}
                        iconStyle={{ background: "#212851", color: "#212851" }}
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