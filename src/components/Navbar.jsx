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
                <button style={{textTransform:'uppercase',borderRadius:'10px'}}>Explore</button>
            </div>
            <div className="center">

                {/* <select id="dropdown"  onChange={handleChange} value={link}>
                    <option hidden > Select an option</option>
                    <option value="Android App Development" >Android App Development</option>
                    {/* <option value="Advanced Android App Development">Advanced Android App Development</option> */}
                    {/* <option value="Web Development">Web Development</option>
                    <option value="Data Science">Data Science</option>    
                </select> */}


                <FormControl fullWidth  style={{width:'300px',marginTop:'10px'}}>
                        <InputLabel id="demo-simple-select-label">Select a subject</InputLabel>
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
                <Button variant="contained" className="search" onClick={()=>navigate(`/page/${link}`)}>
                    Search
                </Button>
            </div>
            <div className="right">
                <a href="#">For Enterprise</a>
                <a href="#">For Students</a>
                <a href="#">For Students</a>
                <a href="#">Login</a>
                <button style={{textTransform:'uppercase',borderRadius:'10px'}}>Join for free</button>
            </div>
        </div>
    )
}

export default Navbar
