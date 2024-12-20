import exp from "./Experience.module.css";
function ExperienceBox(props){
    return(
        <>
        {props.workExperience.map((experience, index)=>(
            <div className={exp.timelineBox} key={index}>
            <div className={exp.companyLogo}>
                <img src={experience.companyLogo} alt="Company Logo"/>

            <div className={exp.companyDetails}>
                <div className={exp.role}>{experience.role}</div>
                <div className={exp.companyName}>{experience.companyName}</div>
                <div className={exp.tenure}>{experience.tenure}</div>
                <div className={exp.location}>{experience.location}</div>
            </div>
            </div>
            <div className={exp.workExp}>
                <ul>
                    {console.log("responsibilities:", experience.responsibilities)}
                    {experience.responsibilities.map((res, index)=>(
                        <li key={index}>{res}</li>
                    ))}
                </ul>
            </div>
        </div>
        ))}
        {/* <div className={exp.timelineBox}>
                <div className={exp.companyLogo}>
                    <img src="https://cdn-icons-png.flaticon.com/128/4299/4299051.png" alt="Company Logo"/>

                <div className={exp.companyDetails}>
                    <div className={exp.role}>Technical Consultant</div>
                    <div className={exp.companyName}>A leading Supply Chain Company</div>
                    <div className={exp.tenure}>Oct 2023 - oct 2024</div>
                    <div className={exp.location}>UAE</div>
                </div>
                </div>
                <div className={exp.workExp}>
                    <ul>
                        <li>Engineered30+RESTfulAPIsfor seamless integration of warehouse management and transportation
                        systems, reducing response times by 25%</li>
                        <li>Advisedstakeholders on transitioning to a scalable microservices architecture, increasing modularity by 30%</li>
                        <li>BoostedMySQLqueryindexing,achieving a 35% reduction in inventory report retrieval time</li>
                        <li>Authoreddetailed user guides, reducing training costs by 15%</li>
                    </ul>
                </div>
            </div> */}
        </>
    )
}

export default ExperienceBox;