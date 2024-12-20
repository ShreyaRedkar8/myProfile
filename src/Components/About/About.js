import about from "./About.module.css"

function About(){
    return(
        <>
        <div className={about.about}>
            <h1>About Me</h1>
            <h2>Hi, I’m Shreya Redkar – A Passionate Full-Stack Developer!</h2>
            <p>Welcome to my digital space! I’m a dedicated Full-Stack Developer with over 3 years of experience designing and
                 developing impactful web applications. Fueled by a passion for creating efficient and scalable solutions, I enjoy 
                 crafting everything from robust back-end systems to user-friendly front-end designs.</p>
                <h2>Milestones I’m Proud Of</h2>
                <p>
                🌟 Designed 20+ RESTful APIs to streamline data handling.<br/>
                🌟 Enhanced database performance by optimizing queries, reducing execution time by 30%.<br/>
                🌟 Reduced bug resolution time by 25% through end-to-end lifecycle management.<br/>
                🌟 Played a pivotal role in implementing microservices, boosting modularity by 25%.</p>
                <h2>Beyond the Code</h2>
                <p>I’m not just a developer—I’m a lifelong learner and a creative problem solver. 
                    When I’m not coding, I’m either learning new skills or spending time with my mischievous white dog, 
                    whose quirky black leg makes him one of a kind.</p>
                <h2>Let’s Build Something Amazing Together!</h2>
                <p>Looking for a dynamic developer in Dubai or beyond? Let’s connect!</p>
        </div>
        </>
    )
}

export default About;