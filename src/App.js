import './App.scss';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div id='app' className="App">
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
