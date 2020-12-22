import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import {Router} from "@reach/router"
import Home from "./Pages/Home"
import Compose from "./Pages/Compose"
import Post from "./Pages/Post"
import './App.css';


function App() {
  return (
    <div className="App">
    <Navbar />
    
    <Router>
    <Home path="/" />
    <Compose path="/compose"/>
    <Post path="/post/:id"/>
    </Router>
    <Footer />

    </div>
  );
}

export default App;
