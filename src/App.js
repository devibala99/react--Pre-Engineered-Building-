import './App.css';
import Header from './components/Header';
// import Footer from './components/Footer';
import Services from './components/Services';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import PageNotFound from './components/PageNotFound';
import { Routes, Route } from 'react-router-dom';
import Project from './components/Project';
import Quote from './components/Quote';
function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/service" element={<Services />}></Route>
                <Route path="/project" element={<Project />}></Route>
                <Route path="/quote" element={<Quote />}></Route>
                <Route path="*" component={<PageNotFound />} />
            </Routes>


        </div>
    );
}

export default App;

