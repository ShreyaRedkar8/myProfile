import edu from "./Education.module.css";
function EducationBox(props){
    console.log(props.institute)
    return(
        <div className={edu.educationBox}>
                    <div className={edu.instituteLogo}>
                        <img src={props.institute.instituteLogo} alt="institute logo"/>
                    </div>
                    <div className={edu.instututeInfo}>
                        <div className={edu.instituteName}>{props.institute.instituteName}</div>
                        <div className={edu.degree}>{props.institute.degree}</div>
                        <div className={edu.instituteLocation}>{props.institute.instituteLocation}</div>
                        <div className={edu.completedYear}>{props.institute.completedYear}</div>
                        <div><a href={edu.instituteLink}>Click for link</a></div>
                    </div>
                </div>
    )
}

export default EducationBox;