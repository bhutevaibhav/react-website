import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header"
import Home from "./pages/home"
import Work from "./pages/work"
import About from "./pages/about" 
import Contact from "./pages/contact"
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
    </Router>
  )
}

export default App
