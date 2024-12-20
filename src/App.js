import {Component} from "react";
import NavBar from "./Components/NavBar";
import "../src/styles.css";
import data from "./Data/Data.json";
import Intro from "./Components/Introduction/Introduction"
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";


class App extends Component{
  constructor(){
    super()
    this.state={
      experience: data.workExperience,
      education: data.education,
      skills: data.skills
    }
  }
  render(){
    console.log(data)
    return (
          <>
          <NavBar />
          <Intro />
          <About />
          <Experience workExperience={this.state.experience}/>
          <Education education={this.state.education}/>
          <Skills skills={this.state.skills}/>
          </>
        );
  }
}



export default App;
