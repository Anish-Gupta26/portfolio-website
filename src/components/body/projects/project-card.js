import React from 'react'
import './project-card.css'
function ProjectCard({item}) {
  return (
    <div className='project-card'>
        <div className='project-info'>
            <label className='project-title'>{item.title}</label>
            <div className='project-links'>
                {item.demo && (
                    <a className='project-link' href={item.demo}>
                        <div className='link-button'>
                        <i class="fi-rr-globe"></i> Demo   
                        </div>    
                    </a>
                )}
                {item.github && (
                    <a className='project-link' href={item.github}>
                        <div className='link-button'>
                        <i class="fi-rr-globe"></i> GitHub   
                        </div>    
                    </a>
                )}
            </div>
            <p>{item.details}</p>
            <div className='project-tags'>
                {item.tags.map((tag)=>{
                    return(
                        <label className='tag'>{tag}</label>
                    );
                })}
            </div>
        </div>
        <img src={item.image} className='project-photo' alt={item.title}/>
    </div>
  )
}

export default ProjectCard