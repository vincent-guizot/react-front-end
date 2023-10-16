// Import Bootstrap from node_modules
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// import './styles/App.css';

// Components
import Home from "./components/Home";

function App() {
  return (
    <div className="container-fluid">
      <div className="container text-center">
        <h1>Welcome to my React Web</h1>
        <p>Lorem ipsum is a dummy text</p>
        <hr />
      </div>
      <Home></Home>
    </div>
  );
}

export default App;
