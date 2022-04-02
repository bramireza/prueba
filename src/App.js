import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="hola soy brayian Ramirez"></Componente>
        </section> 
      </header>
      
    </div>
  );
}

export default App;
