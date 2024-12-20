import exp from "./Experience.module.css";
import ExperienceBox from "./ExperienceBox";
function Experience(props){

    return(
        <>
        <div className={exp.experience}>
            <h1>
            <span>Work Experience</span></h1>
            <div className={exp.timeline}>
            <ExperienceBox workExperience={props.workExperience}/>
    
            <div className={exp.timelineDivider}>
                <div className={exp.aeroplaneIcon}>
                    <img src="https://cdn-icons-png.flaticon.com/128/6292/6292085.png" alt=""/>
                </div>
            </div>
            
            </div>

        </div>
        </>
    )

}

export default Experience;