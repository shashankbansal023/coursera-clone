import React,{useState} from 'react';
import {subdata} from './SubData.js';

const Subject = (props) => {
    const {course} = props;

    const [subjectdata, setData] = useState(subdata);

    let array = [...subjectdata];

    return (
        <div style={{display:'flex',flexWrap:'wrap',gap:'30px',margin:'5% 10%'}}> 
            {
                 array.filter(item=>item.subject == course)[0].courses.map(item=>{
                    return  <article key={item.title} style={{width:'30%',textAlign:'left'}}>
                                <img alt="img" src={item.img} width="300"></img>
                                <div style={{fontWeight:'bold',width:'300px',marginBottom:'5px'}}>{item.title}</div>
                                <div>{item.prof}</div>
                            </article>
                })

            }
               
            
        </div>
    )
}

export default Subject
