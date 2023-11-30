import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';
function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/service" element={<Services />}></Route>
            </Routes>

            <Footer />

        </div>
    );
}

export default App;
