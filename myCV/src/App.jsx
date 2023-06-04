import { useState } from 'react'
import './App.css'
import { CV } from '../CV/cv'
import Hero from "../components/Hero/Hero"
import About  from '../components/About/About'
import Education from '../components/Education/Education'
import Experience from '../components/Experience/Experience'
import More from '../components/More/more'





//destructuring
const {hero,education, experience,languages, habilities, volunteer} = CV;



function App() {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
    <Hero hero={hero} />
    <br/>
     <About hero={hero} />
     <br/>
     <Education education={education}/>
     <br/>
      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
	      />  
     
      {/* funcion para los botones */}
     <button
              className="custom-btn"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            
            <button
              className="custom-btn"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
            <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
</div>


  );
};

export default App;
