import React,{useState} from 'react';
import './Navbar.css' ;
import { useNavigate } from 'react-router-dom';
import {Link } from 'react-router-dom';
import {Button, FormGroup, FormControl, ControlLabel, Select,MenuItem,InputLabel} from '@mui/material';


const Navbar = () => {


    const navigate = useNavigate();
    const [link, setLink] = useState(" ");

    const handleChange = (e) =>{
        setLink(e.target.value);
    }

    return (
        <div  className="navbar-container">
            <div className="left">
                <Link to='/'>
                    <img width="100" src="https://coursera-clone.netlify.app/logo.svg"/>
                </Link>
                <Button variant="contained" >Explore </Button>
            </div>
            <div className="center">
                <FormControl fullWidth  style={{width:'300px',height:'60%',margin:'15px 0px'}}>
                        <InputLabel   id="demo-simple-select-label">Select a subject</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={link}
                            label="Select a subject"
                            onChange={handleChange}
                        >
                            <MenuItem value={"Android App Development"}>Android App Development</MenuItem>
                            <MenuItem value={"Web Development"}>Web Development</MenuItem>
                            <MenuItem value={"Data Science"}>Data Science</MenuItem>
                        </Select>
                       
                </FormControl>
                {/* <button className="search" onClick={()=>navigate(`/page/${link}`)}>Search</button> */}
                <Button variant="contained" style={{margin:'15px 0px'}} onClick={()=>navigate(`/page/${link}`)}>
                    Search
                </Button>
            </div>
            <div className="right">
                <a href="#">For Enterprise</a>
                <a href="#">For Students</a>
                <a href="#">For Students</a>
                <a href="#">Login</a>
                <Button variant="contained" >Join for free</Button>
            </div>
        </div>
    )
}

export default Navbar

