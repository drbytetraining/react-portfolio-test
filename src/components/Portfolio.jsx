import React from 'react'
import {portData} from '../assets/data'

const Portfolio = () => {
  return (
    <div>
      <h1>Our Projects</h1>

      <div className="mt-28 flex gap-x-10">
        {
          portData.map(project =>(
              <div className="w-fit">
                <a href={project.siteUrl} target='_blank'>
                <img src={project.img} className='w-20' alt="" />
                </a>
                
                <br />
                <br />
                <br />
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default Portfolio
