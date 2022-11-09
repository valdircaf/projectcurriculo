import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import Navbar from './Layout/Navbar/Navbar';
import Container from './Container/Container';
import Skills from './Pages/Skills/Skills'
import NavbarResponsive from './Layout/Navbar/NavbarResponsive';

function App() {
    return (

        <Container>

            <Router>

                <Navbar/>
                <NavbarResponsive/>
                <Routes>
                    <Route path='/skills' exact="exact" element={<Skills/>}/>
                    <Route path='/' exact="exact" element={<Home/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/about' element={<About/>}/>

                </Routes>
            </Router>

        </Container>
    );
}

export default App;
