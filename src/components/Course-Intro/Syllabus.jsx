import React,{useState} from 'react'
import {Button} from '@mui/material'

const Syllabus = () => {

    const [showAndHide, setShoWAndHide] = useState({1:"show more",2:"show more",3:"show more"});
    const [toggle,setToggle] = useState({1: false, 2:false,3:false});

    const [readMore,setReadMore] = useState(['read more','read more','read more']);

    const readAndShow = (index) =>{
        let obj = [...readMore];
        
        if(obj[index-1] == "read more"){
            obj[index-1]  = "show less"
        }else{
            obj[index-1] = "read more";
        }

        setReadMore(obj);
    }

    function toggleContent(index) {
        const newobj = {...showAndHide};
        const toggleElement = {...toggle};
         console.log(toggleElement ,newobj)
         
        toggleElement[index] = !toggleElement[index];
        setToggle(toggleElement);
        newobj[index] == "show more" ? newobj[index] = "show less": newobj[index] = "show more";
         setShoWAndHide(newobj);
         
     }
 

    const array = [{
     id: 1,
     title: "PROGRAMMING COMPETITIONS",
     description:`We'll begin with introduction to the world of competitive programming — the rules, specialties 
     and helpful tips on taking part in competitions in general. In a separate lesson, we'll learn how to test programs : 
     what kinds of test cases there are, how to 
     organize the search for a bugtest, and particularly a method of automating testing called stress-testing.`     
    },{
        id: 2,
        title: "CORRECTNESS FIRST",
        description:`We'll begin with introduction to the world of competitive programming — the rules, specialties 
        and helpful tips on taking part in competitions in general. In a separate lesson, we'll learn how to test programs : 
        what kinds of test cases there are, how to 
        organize the search for a bugtest, and particularly a method of automating testing called stress-testing.`   
    },
{
    id: 3,
    title: "COMMON STRUGGLES",
    description:`We'll begin with introduction to the world of competitive programming — the rules, specialties 
    and helpful tips on taking part in competitions in general. In a separate lesson, we'll learn how to test programs : 
    what kinds of test cases there are, how to 
    organize the search for a bugtest, and particularly a method of automating testing called stress-testing.`   
}]

   

    return (
        <div style={{padding:'30px'}}>
            <div style={{textAlign:'center',fontWeight:'bold'}}>
                <div style={{fontSize:'25px',marginBottom:'5px'}}>Syllabus</div>
                <div style={{fontSize:'20px',marginBottom:'5px'}}>What you will learn from this course</div>
                <div style={{fontSize:'15px',marginBottom:'5px'}}>Content Rating 92% : (1,831 ratings)</div>
            </div>
            
            {
                array.map(item =>{
                    return(
                        <>       
         <div key ={item.id} style={{display:'grid',gridTemplateColumns:'1fr 6fr',margin:'30px 0px'}}>
                <div style={{textAlign:'center'}}>
                    <div style={{textTransform:'uppercase',fontSize:'20px',marginBottom:'20px'}}>Week </div>
                    <div style={{fontSize:'30px'}}>{item.id}</div>
                </div>
                <div>
                    <div style={{fontSize:'20px',marginBottom:'20px',fontWeight:'bold'}}>5 hours hours to complete</div>
                    <div style={{fontSize:'20px',marginBottom:'20px',fontWeight:'bold'}}>{item.title}</div>
                    <div>
                        { readMore[item.id-1] == 'read more' ? item.description.slice(0,200) + "..." : item.description }
                        <Button variant="text" size="small" style={{cursor:'pointer',color:'blue',fontWeight:'bold',textTransform:'lowercase'}}onClick={()=>readAndShow(item.id)}>{readMore[item.id-1]}</Button>
                   </div>
                    <div style={{margin:'20px 0px',display:'flex'}}>
                        <p>2 videos , 2 readings ,1 exercises</p>
                        <Button variant="text" style={{fontWeight:'bold',fontSize:'14px'}} size="small" onClick={()=>toggleContent(item.id)}>{showAndHide[item.id]}</Button>
                    </div>
                    <div>
                        {
                            toggle[item.id] == true && 
                            <>
                                <div>
                                    <p style={{fontWeight:'bold'}}>2 Videos</p>
                                    <p>Introduction and Course Structure : 6 minutes</p>
                                    <p>Basic of Web-development : 5 minutes</p>
                                </div>
                                <hr style={{width:'100%',height:'1px',backgroundColor:'black'}}></hr>
                                <div>
                                    <p style={{fontWeight:'bold'}}>2 readings</p>
                                    <p>Welcome : 4 minutes</p>
                                    <p>Solution to Problem 1-4: Straight Flush : 10 minutes</p>
                                </div>
                                <hr style={{width:'100%',height:'1px',backgroundColor:'black'}}></hr>
                                <div>
                                    <p style={{fontWeight:'bold'}}>1 practice exercises</p>
                                    <p>Investing Tests : 30 minutes</p>
                                </div>
                                </> 
                            
                        } 
                   </div>  
                  
               </div>     
           
            </div>   
                        {      
                            item.id!=3 && <hr style={{width:'100%',height:'1px',backgroundColor:'black'}}></hr>     
                    }
                    </>           
                    )
                })

            }
            
        </div>
    )
}

export default Syllabus
