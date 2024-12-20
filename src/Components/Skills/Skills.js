import ski from "./Skills.module.css"
function Skills(props){
    console.log("skills: ", props.skills)
    return(
        <div className={ski.skillsSet}>
            <h1>Skills</h1>
            {/* <div className={ski.skillDisplay}>
            {props.skills.map((skill, index)=>(
                <div className={ski.skillBox}>
                    <span>{skill.type}</span>
                    {skill.list.map((i)=>(
                        <div className={ski.skillProgress}>
                        <div className={ski.level}> 
                            <div className={ski.skillName}>
                                <span>{i}</span>
                            </div>
                        </div>
                        </div>
                    ))}
                
            </div>
            ))}
            
            </div> */}

            <div className={ski.skillDisplay}>
                {
                    props.skills.map((skill)=>(
                        <div className={ski.skills}>
                            <span>{skill.name}</span>
                            <img src={skill.icon} alt="skill icon"/>
                        </div>
                        
                    ))
                }
            </div>

        </div>
    )
}

export default Skills;