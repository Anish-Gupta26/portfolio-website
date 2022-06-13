import React from 'react'
import './projects.css'
import {ProjectData} from './project-data'
import ProjectCard from './project-card';
import Separator from '../../separator';
function Project() {
  const data = ProjectData;
  return (
    <div className='project' id='project'>
      <Separator/>
      <label className='section-title'>Projects</label>
     {data.map((item)=>{
       return(
          <div key={item.title} className='project-item' data-aos="flip-up"  data-aos-duration="2000">
              <ProjectCard item={item}/>
              <hr/>
          </div>
       );
     })} 
    </div>
  )
}

export default Project