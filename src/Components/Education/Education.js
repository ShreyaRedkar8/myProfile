import edu from "./Education.module.css";
import EducationBox from "./EducationBox";
function Education(props){
    return(
        <div className={edu.educationModule}>
            <h1>Education</h1>
            <div className={edu.educationBoxes}>
                {
                    props.education.map((institude, index)=>(
                        <EducationBox institute={institude} key={index}/>
                    ))
                }   
            </div>
        </div>
    )
}

export default Education;