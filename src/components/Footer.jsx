import React from 'react';
import './Footer.css'

const Footer = () => {

    const array = ['Finding Purpose & Meaning in Life','Understanding Medical Research','Japanese for Beginners','Introduction to Cloud Computing',
    'Foundations of Mindfulness','Finding Purpose & Meaning in Life',' Understanding Medical Research',' Japanese for Beginners',
    'Introduction to Cloud Computing','Foundations of Mindfulness']
       
    const array2 = ['Top Online Courses','Top Online Specializations','Online Certificates','Online Degree Programs',
'Top Online Specializations','Online Certificates','Online Degree Programs']


    return (
        
        <div class="footer-container" style={{display:'grid',width:'100%',gridTemplateColumns:'1fr 1fr 1fr 1fr',padding:'10px'}}>
            {
                array2.map(item=>{
                    return <div style={{margin:'10px'}}>
                          <h1 style={{fontSize:'20px',textAlign:'left'}}>{item}</h1>
                          {array.map(item=>{
                              return <div style={{padding:'5px'}}>
                                    <a  href="#">{item}</a>
                                  </div>
                          })}
                    </div> 
                  
                })

            }
            <div class="icon-block" style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'20px',padding:'10px',justifyContent:'center'}}>
                <img src="https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg"></img>
                <img src="https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg"></img>
                <img src="https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg"></img>
            </div>            
        </div>

    )
}

export default Footer
