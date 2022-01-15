import React from 'react';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Subject from '../components/Subject';
import {useParams} from 'react-router-dom';


const SubjectPage = () => {
    const {course} = useParams();

    return (
        <>
            <Subject course={course}></Subject>
            <Footer></Footer>
        </>
    )
}

 export default SubjectPage
