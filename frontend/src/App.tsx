import logo from './logo.svg';
import './App.css';

interface AppProps {
  contract: any;
  currentUser: any;
  nearConfig: any;
  wallet: any;
}

const App = (props: AppProps)  => {
  const {contract, currentUser, nearConfig, wallet} = props;
  console.log(contract, currentUser, nearConfig, wallet);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
