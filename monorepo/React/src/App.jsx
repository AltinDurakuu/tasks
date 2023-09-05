import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import {Route, Routes } from 'react-router-dom';
import ServicePage from './components/ServicePage';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="/service/:serviceName" element={<ServicePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
