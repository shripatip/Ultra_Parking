import Navbar from './navbar';
import Home from './home';
import Create from './create';
import {Box,Container} from "@mui/material"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {


  return (
    <Router>
      <div className="App">
        < Container  sx={{background:"#CCCC99",width:"650px",borderRadius:5}}>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
        </Container>
      </div>
    </Router>
  );
}

export default App;
