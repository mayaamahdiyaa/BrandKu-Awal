import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./components/Footer";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Header from "./component/Header";

import featuresData from "./data/featuresData";

const App = () => {  

    const [features, setFeatures] = useState(featuresData)

    return (
        <>
            <BrowserRouter>
                <Header/>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/pricing" element={<Pricing />} />
                </Routes>

                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App;