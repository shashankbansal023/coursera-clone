import React ,{useState} from 'react';
import {data} from './Data';

const Community = () => {
    
    const [index,setIndex] = useState(0);
    const [items,setItems] = useState(data);

    const rightClick =()=>{
        
        if (index < -3){
            setIndex(0);
        }else{
            setIndex(index-1);
        }
        
    }

    const leftClick =()=>{
        if(index > 3){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }

    return (
        <div style={{marginTop:'100px',position:'relative'}}>
            <h1 style={{textAlign:'center'}}>From the Coursera Community</h1>
            <h2 style={{textAlign:'center',marginBottom:'10px'}}>77+ million people are already learning on Coursera</h2>
            <div style={{display:'flex',gap:'30px',margin:'auto',width:'50vw',overflow:'hidden',padding:'10px'}}>
                <button style={{position:'absolute',right:'15vw',top:'50%',fontWeight:'bold',borderRadius:'10px',color:'white'}} onClick={()=>rightClick()}>{`>`} </button>
                <button style={{position:'absolute',left:'15vw',top:'50%',fontWeight:'bold',borderRadius:'10px',color:'white'}} onClick={()=>leftClick()}> {`<`} </button>
                {
                    items.map(item=> {
                    return <div style={{transform:`translateX(${index < -3 || index >3 ?0:15*index}vw)`,transition:'transform 1s ease-in-out'}}>
                               <img src={item.img} alt={item.name}/>
                               <div style={{textAlign:'center'}}>
                                    <h2 style={{fontWeight:'500'}}>{item.name}</h2>
                                    <p style={{fontSize:'18px'}}>{item.title}</p>
                                    <p>{item.place}</p>   
                                </div>
                                <hr style={{width:'50%',height:'1px',backgroundColor:'blue'}}/>
                                <div style={{textAlign:'center',padding:'25px 0px 25px 0px'}}>
                                    {item.testimonial}
                                </div>        
                            </div>
                            })
                }
            </div>
        </div>
    )
}

export default Community
