

import About from './about/About';
import './App.css';
import Intro from './components/intro/Intro';
import Contact from './Contact';
import Project1 from "./Project1";
import Amazon from "./images/amazon_image.PNG";
import Netflix from "./images/netflix_image.PNG";
import Project2 from './Project2';




function App() {
  return (
    <div className="App">
     <Intro/>
     <About/>
   
<Project1  
  id = "123456"
  title = "Netflix"
  desc = "NETFLIX CLONE APP"
  url="https://netflix-clone-ec2b2.web.app/"
  image ={Netflix}
 
/>





    <Contact/>
     
    </div>
  );
}

export default App;
