import Intro from '../components/Course-Intro/Intro';
import About from '../components/Course-Intro/About';
import Syllabus from '../components/Course-Intro/Syllabus';
import {useParams} from 'react-router-dom';


const CoursePage = () =>{

   let {subject} = useParams();
    return (
        <div>
            <Intro subject={subject}></Intro>
            <About></About>
            <Syllabus></Syllabus>
        </div>
       
    )
}

export default CoursePage