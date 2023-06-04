import React from "react"
import "./More.css"

const More = ({languages, habilities, volunteer}) => {
    console.log(languages)
    return (
      <div className='Info'>
      <div className="Languages">
        <h2>Languages</h2>
        <h3>{languages.language}</h3>
        <p>✏️ {languages.wrlevel}</p>
        <p>💭 {languages.splevel}</p>
      </div>
      <div className='Habilities'>
        <h2>Habilities</h2>
        {habilities.map((item)=>{
          return <p>🛠️ {item}</p>
        })}
      </div>
      <div className="Volunteer">
        <h2>Volunteer</h2>
        {volunteer.map((item)=>{
          return(
          <div key={item.name}>
          <h3>{item.name}</h3>
          <p>📍 {item.where}</p>
          <p className='Description'>{item.description}</p>
          </div>)
        })
        }
      </div>
      </div>
    )
  }
  
  export default More
