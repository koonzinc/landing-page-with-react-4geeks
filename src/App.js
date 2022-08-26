import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Jumbotron />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
