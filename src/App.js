
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import QuotePage from './pages/QuotePage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ReviewPage from './pages/ReviewPage';
import NavBar from './components/NavBar';


// import './App.css';
// import './Nav.css'
import './style/Home.css'
import Footer from './components/Footer';




function App() {
  return (

 
      <>
     
      <Router>
      <NavBar />
     
    <div className="App" style= {{
      backgroundImage: 'url(../pictures/IMG_3318.JPG)'
    }} >
      
      <Routes>
      <Route path ='/' element=  {<HomePage />} />
      <Route path ='/about' element= {<AboutPage />} />
     <Route path ='/contact' element={ <ContactPage />} />
     <Route path ='/quote' element= {<QuotePage />} />
     <Route path ='/review' element= {<ReviewPage />} />
    </Routes>
    </div>

    </Router>
   <Footer />
    </>
    
  )
}


export default App;
