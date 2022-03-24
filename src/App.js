import './App.scss';
import NavBar from './components/practitioners/NavBar';
import Form from './components/practitioners/Form';
import How from './components/practitioners/HowItWorks';
import Community from './components/practitioners/Community';
import Testimonial from './components/practitioners/Testimonial';

function App() {
  // app is practitioners
  return (
    <div className="App">
          <NavBar/>
          <Form/>
          <How/>
          <Community/>
          <Testimonial/>
    </div>
  );
}

export default App;
