import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("i got hit..");

  console.log(
    "environment variable is..",
    process.env.REACT_APP_SENDGRID_API_KEY1
  );

  const secretApiKey = process.env.REACT_APP_SENDGRID_API_KEY1;
  const sendGridKey = process.env.REACT_APP_SENDGRID_API_KEY2;

  return (
    <div className="App">
      <p>Secret APi key is.. {secretApiKey}</p>
      <p>Sendgrid key is.. {sendGridKey}</p>
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
