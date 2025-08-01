import {Slide} from "react-awesome-reveal";
import {FaDotCircle, FaGraduationCap} from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div className="max-w-7xl mx-auto  bg-transparent   py-10 my-10">
      <h1 className="text-4xl font-bold p-2 ms-2">
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-[#3d60b7] to-[#6DA3D7] ">
          {" "}
          Education
        </span>
        <Slide>
          <hr className=" w-14 h-1 bg-gradient-to-r from-[#3d60b7] via-[#7d98df] to-[#d24341]" />
        </Slide>
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            backgroundColor: "#FFFCEF",
            boxShadow: "10%",
            // "linear-gradient(90deg, rgba(250,246,224,1) 0%, rgba(241,231,179,1) 35%)",
            // "linear-gradient(90deg, rgba(61,96,183,1) 0%, rgba(109,163,215,1) 35%)",
            color: "#3F64BA",
          }}
          contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
          date="2019 - 2023"
          iconStyle={{background: "#fc9585", color: "#fff"}}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title  text-lg font-semibold">
            B.Sc. in Computer Science and Engineering
          </h3>

          <p className="text-[#ea625b] font-bold">CGPA: 3.83/4</p>
          <h4 className="vertical-timeline-element-subtitle">
            Leading University,Sylhet, Bangladesh.
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#FFFCEF",
            boxShadow: "10%",
            color: "#3F64BA",
          }}
          contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
          date="2016 - 2018"
          iconStyle={{
            background: "#fc9585",
            border: "none",
            fontSize: "10px",
            color: "#fff",
          }}
          icon={<FaDotCircle />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-semibold">
            A-Levels
          </h3>

          {/* <p className="text-red-50 font-bold">CGPA: 3.83/4</p> */}
          <h4 className="vertical-timeline-element-subtitle ">
            Sylhet International School and College,Sylhet, Bangladesh.
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#FFFCEF",
            boxShadow: "10%",
            color: "#3F64BA",
          }}
          contentArrowStyle={{borderRight: "7px solid  rgb(33, 150, 243)"}}
          date="2015 - 2016"
          iconStyle={{
            background: "#fc9585",
            border: "none",
            fontSize: "10px",
            color: "#fff",
          }}
          icon={<FaDotCircle />}
        >
          <h3 className="vertical-timeline-element-title text-lg font-semibold">
            International GCSE
          </h3>

          {/* <p className="text-red-50 font-bold">CGPA: 3.83/4</p> */}
          <h4 className="vertical-timeline-element-subtitle ">
            Sylhet International School and College,Sylhet, Bangladesh.
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
