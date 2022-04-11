import Navigation from './components/Navigation';
import Header from './components/Header';
import Statistics from './components/Statistics';
import Boost from './components/Boost';
import Footer from './components/Footer';
import logo from './images/logo.svg';
import LinkShorten from './components/LinkShorten';

function App() {
  return (
    <div className="App">
      <Navigation logo={logo}/>
      <Header />
      
      <section>
        <LinkShorten />
        <Statistics />
      </section>
      
      <Boost />
      <Footer logo={logo}/>
    </div>
  );
}

export default App;
