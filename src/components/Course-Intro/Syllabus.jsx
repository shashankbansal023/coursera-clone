import React,{useState} from 'react'



const Syllabus = () => {

    const [link,setLink] = useState(["show more","show more","show more"]);
    const [content,setContent] = useState([]);
    const [firstLink, setFirstLink] = useState("show more");

    const html_element = (
        <div>
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
        </div>    
    )

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

    function changeContent (index) {
       
        let newArray = [...content];
        let newArray2 = [...link];

        newArray[index-1]!="" ? newArray[index-1] = "" : newArray[index-1] = html_element;
        setContent(newArray);
        
        newArray2[index-1] == "show more"? newArray2[index-1] = "show less": newArray2[index-1] = "show more";
        setLink (newArray2);
        
    }


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
                        {item.description}
                        <span style={{padding:'0px 20px',cursor:'pointer',color:'blue' }} >{firstLink}</span>
                    </div>
                    <div style={{margin:'20px 0px',display:'flex'}}>
                        <p>2 videos , 2 readings ,1 exercises</p>
                         <button style={{padding:'0px 10px',textTransform:'uppercase',textDecoration:'none',cursor:'pointer'}}  onClick={()=>changeContent(item.id)}>{link[item.id-1]}</button>
                    </div>
                    <div>
                      {
                        content[item.id-1]
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
