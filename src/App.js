
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';

function App() {
   return (
    <>  
  <Navbar title = 'Word Counter' about = 'My home' link ='My Link'/>
  <div className="container my-3">
  <Textbox heading = 'Enter the text below'/>
  {/*<About heading= 'About Us'>*/}
  </div>
  </>
  );
}
<style>
  cont
</style>

export default App;
