import React from "react";
import styled from "styled-components";

const Nav= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 20px 170px;
`;

const NavList= styled.ul`
display: flex;
align-items: center;
list-style: none;
gap:60px;
font-size: 15px;
`;

const Title= styled.div`
font-size: 30px;
color: #fff;
font-weight: 600;
font-family: 'Times New Roman', Times, serif;
text-tranform: uppercase;
margin-left: 15px;
&:hover{color: #0f0}
`;

const Resume = styled.div``

const ResumeButton = styled(Resume)`
padding: 10px 40px;
border-radius: 50px;
background: linear-gradient(264deg, #e07109 -5.09%, #690650e2 106.28%);
cursor: pointer;
transition: 0.5s;

&hover {
 transform: scale(1.05);
}
`

class NavBar extends React.Component{
    render(){
        return(
            <>
            <Nav>
                <Title>Profile</Title>
                <NavList>
                    <li>About me</li>
                    <li>Work Experience</li>
                    <li>Education</li>
                    <li>Skills</li>
                    <li>Contact me</li>
                </NavList>
                <ResumeButton>Download Resume</ResumeButton>
            </Nav>
            
            </>
        )
    }
}

export default NavBar;