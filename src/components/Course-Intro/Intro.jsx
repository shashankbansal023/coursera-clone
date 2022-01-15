
import React from 'react';
import {Link} from 'react-router-dom'

const Intro = (props) => {
    let {subject} = props;
    return (
        <div style={{padding:'5% 0px 0px 15%',backgroundColor:'#3254a8',color:'white'}}>
            <div style={{display:'flex',gap:'20px',marginBottom:'20px'}}>
                <a href="#" style={{color:'white'}}>Browse</a>
                <Link to={`/subject/${subject}`} style={{color:'white'}}>{subject}</Link>
                <a href="#" style={{color:'white'}}>{subject}</a>
            </div>
            <div style={{fontSize:'30px'}}>{subject}</div>
            <div style={{width:'60%',paddingTop:'20px'}}>Build Complete Web and Hybrid Mobile Solutions. Master front-end web, hybrid mobile app and server-side development in three comprehensive courses.</div>
            <div style={{display:'flex',gap:'30px',paddingTop:'30px'}}>
                <img src="https://bit.ly/3p5nbtK" style={{borderRadius:'50%',width:'60px',objectFit:'fill',height:'60px'}}/>
                <h3>Gaurav Tambe</h3>
            </div>
            <button style={{textTransform:'uppercase', margin:'20px 0px',borderRadius:'7px',backgroundColor:'white',color:'black',
        fontWeight:'bold',width:'150px'}}>Enroll</button>

        <div>
            <div style={{display:'flex',gap:'10px'}}>
                <p>8716</p>
                <p>Already Enrolled</p>
            </div> 
            <img style={{display:'inline'}} src="https://bit.ly/2R41spE"></img>
        </div>
        


        </div>
    )
}

export default Intro
