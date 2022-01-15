import './App.css';
import Home from './pages/Home';
import CoursePage from './pages/CoursePage';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import SubjectPage from './pages/SubjectPage'

function App() {
  return (
    <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/page/:subject" element={<CoursePage/>}/>
            <Route path="/subject/:course" element={<SubjectPage/>}></Route>
          </Routes>
      </Router>

    </div>
    
    
  );
}

export default App;




