import first from '../images/nodejs.jpeg' ;
import second from '../images/reactjs.jpeg';
import third from  '../images/html.jpeg';
import python from '../images/python.jpeg';
import ibm from '../images/ibm.jpeg';
import react1 from '../images/react1.jpeg';
import cloud from '../images/cloud.jpeg';
import fullstack from '../images/fullstack.jpeg';
import javascript from '../images/javascript.jpeg';
import git from '../images/git.jpeg';
import android from '../images/android.jpeg';
import advanced from '../images/advanced-android.jpeg'
import data from '../images/data.jpeg';
import advancedData from '../images/advanced-data.jpeg';
import ibmdata from '../images/ibmdata.jpeg';


export  const subdata = [
    {
       
        subject: "Web Development",
        courses: [
            {
                title :"Server-side Development with NOdeJS, Express and MongoDB",
                img: first,
                prof:'Dhaval Chheda'    
            },
            {
                title :"Front-End Web Development with React",
                img: second,
                prof:'Albert Sebastian'    
            },{
                title :"HTML, CSS and Javascript for Web Developers",
                img: third,
                prof:'Swanand Kadam'    
            },{
                title :"Python For Everybody",
                img: python,
                prof:'Hinduraj Kadam'    
            },{
                
                title :"IBM Full Stack Web Development",
                img:ibm,
                 prof:'Ravi Ahuja'    
                
            },{
                title :"Full Stack Web Development with React ",
                img:fullstack,
                prof:'Jogesh Muppala'
            },{
                title :'Developing Cloud Apps with React & Node',
                img:cloud,
                prof:'Prateek Shukla'    
            },{
                title :"Introduction to Javascript ",
                img: javascript,
                prof:'Pooran Suthar'    
            },{
                title :'Git + Github',
                img:git,
                prof:'Andrew Nortje'    
            },{
                title:'React:Zero to Hero',
                img: react1,
                prof:'Albert Sebastian'
            },{
                title:'React Course',
                img: react1,
                prof:'Shashank Bansal'
            }]
    },
    {
       
        subject:'Android App Development',
        courses : [{
            title :"Android App Development",
            img:android,
            prof:'Shashank Bansal'    
        },{
            title :"Advanced Android App Development",
            img:advanced,
            prof:'Benny Lo'    
        }]
    },
    {
        
        subject: 'Data Science',
        courses : [{
            title :"Data Science Fundamentals with Python",
            img:data,
            prof:'Nrupul Dev'    
        },{
            title :"IBM Data Science",
            img:ibmdata,
            prof:'Khusboo Khattar'    
        },{
            title :'Advanced Data Science IBM',
            img: advancedData,
            prof:'Shashank Bansal'    
        }]
    }

] 