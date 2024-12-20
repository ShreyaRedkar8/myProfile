import intro from "./Introduction.module.css";

function Intro(){
    return(
        <>
        <div className={intro.intro}>
            <img alt="Shreya" src="images/profilePic.JPEG"/>
            <h1><span>I'm Shreya Redkar,</span> A Full-stack Developer</h1>
            <p>Having 3+ years of work experience as a Software Developer</p>
            <div className={intro.action}>
                <div className={intro.connect}>Connect with me</div>
                <div className={intro.resume}>Check out my resume</div>
            </div>
        </div>
        </>
    )
}

export default Intro;