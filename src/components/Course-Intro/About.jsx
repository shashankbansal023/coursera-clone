import React from 'react'
import './About.css'
import { BsFillPersonFill,BsArrowLeftRight } from 'react-icons/bs'

const About = () => {
    return (
        <div>
           <div style={{display:'flex',gap:'20px',padding:'2% 0px 1% 15%',fontSize:'20px'}}>
                <a href="#">About</a>
                <a href="#">Instructors</a>
                <a href="#">Syllabus</a>
                <a href="#">Reviews</a>
                <a href="#">Enrollment</a>
                <a href="#">Options</a>
                <a href="#">FAQ</a>
           </div> 
           <hr style={{width:'100vw',height:'1px',backgroundColor:'black'}}></hr>
           
           <div style={{display:'flex',paddingBottom:'0px'}}>
               <div style={{width:'50%',padding:'2% 0px 1% 15%'}}>
                    <div style={{fontSize:'25px',fontWeight:'500'}}>About this course</div>
                    <div style={{paddingBottom:'20px'}}>22781 recent views </div>
                    <div>
                    As a coursera certified specialization completer you will have a proven deep understanding on massive 
                    parallel data processing, data exploration and visualization, and advanced machine learning & deep learning.
                     You'll understand the mathematical foundations behind all machine learning & deep learning algorithms. 
                     You can apply knowledge in practical use cases, justify architectural decisions, understand the characteristics of different algorithms, 
                     frameworks & technologies & how they impact model performance & scalability. If you choose to take this specialization and earn the Coursera specialization certificate, you will also earn an IBM digital badge. 
                    To find out more about IBM digital badges follow the link ibm.biz/badging.
                    </div>
               </div>
               <div style={{width:'35%',padding:'20px',margin:'5% 5% 3% 5%',backgroundColor:'#c7cfd1',}}>
                   <div style={{display:'flex',padding:'10px',gap:'20px'}}>
                        <BsFillPersonFill style={{fontSize:'30px',borderRadius:'50%',border:'1px solid gray',padding:'10px'}}></BsFillPersonFill>
                        <p style={{fontSize:'20px'}}>Learner Outcomes</p>
                   </div>
                   <div style={{display:'flex',padding:'10px',gap:'20px',alignItems:'center'}}>
                        <BsArrowLeftRight style={{fontSize:'20px',borderRadius:'50%',border:'1px solid gray',padding:'15px'}}></BsArrowLeftRight>
                        <div style={{fontSize:'25px'}}>18%</div>
                        <div style={{width:'50%'}}>started a new career after completing these courses</div>
                   </div>
                
                   <div style={{display:'flex',padding:'10px',gap:'20px',alignItems:'center'}}>
                        <BsArrowLeftRight style={{fontSize:'20px',borderRadius:'50%',border:'1px solid gray',padding:'15px'}}></BsArrowLeftRight>
                        <div style={{fontSize:'25px'}}>18%</div>
                        <div style={{width:'50%'}}>started a new career after completing these courses</div>
                   </div>
                   <div style={{display:'flex',padding:'10px',gap:'20px',alignItems:'center'}}>
                        <BsArrowLeftRight style={{fontSize:'20px',borderRadius:'50%',border:'1px solid gray',padding:'15px'}}></BsArrowLeftRight>
                        <div style={{fontSize:'25px'}}>18%</div>
                        <div style={{width:'50%'}}>started a new career after completing these courses</div>
                   </div>
               </div>
           </div>
           <hr style={{width:'100vw',height:'1px',backgroundColor:'black'}}></hr>
        </div>
    )
}

export default About