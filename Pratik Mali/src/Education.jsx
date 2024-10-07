import React from 'react'
import './Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Education() {
  return (
    
    <div id='education'>
      <div className="heading" style={{
    fontFamily: 'cocogoose',
    fontWeight: 'bolder',
    color: 'white',
    fontSize: '2rem',
}}>Education</div>
      <VerticalTimeline lineColor="#cd0ff9">
      <VerticalTimelineElement className="vertical-timeline-element--work positions" date="2015 - 2020">
    
    <h3 className="vertical-timeline-element-title">Higher Secondary</h3>
    <h4 className="vertical-timeline-element-subtitle">ST.Francis High School</h4>
    <p>
Participated in various extracurricular activities including olympaids of maths and science, winning several olympaids competitions.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work positions"
    date="2022 - 2024"
    
  >
    <h3 className="vertical-timeline-element-title">Junior College</h3>
    <h4 className="vertical-timeline-element-subtitle">Mumbai Educational Trust Institute of Science and Commerce</h4>
    <p>
    Completed higher secondary education at MET Institute of Science and Commerce with a major in Science and optional subject as Information Technology. Developed a passion for programming.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work positions"
    date="?????"
   
  > 
   <h3 className="vertical-timeline-element-title">Internship</h3>
  <h4 className="vertical-timeline-element-subtitle">Your Company Could Be on My Resume!</h4>
  <p>
  I'm currently seeking an internship opportunity where I can contribute and learn. If your company is looking for a dedicated intern, <a href="mailto:pratikmali242005@gmail.com" className='contact_me'>contact me</a> to explore how we can work together!
</p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work positions"
    date="2022 - 2026"
   
  > 
    <h3 className="vertical-timeline-element-title">Bachelor's Degree</h3>
    <h4 className="vertical-timeline-element-subtitle">Mumbai Educational Trust Institute of Engineering</h4>
    <p>
    Completed higher secondary education at MET Institute of Science and Commerce with a major in Science and optional subject as Information Technology. Developed a passion for programming.
    </p>
  </VerticalTimelineElement>
  


</VerticalTimeline>
    </div>
  )
}
