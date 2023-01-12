import logo from "./logo.svg";
import "./App.css";

function App() {
  function createMarkup() {
    return { __html: "<p>This information has my secret information</p>" };
  }

  const secretApiKey = process.env.REACT_APP_SENDGRID_API_KEY1;
  const sendGridKey = process.env.REACT_APP_SENDGRID_API_KEY2;

  return (
    <div className="root-app">
      <div className="App">
        <p>Secret APi key is.. {secretApiKey}</p>
        <p>Sendgrid key is.. {sendGridKey}</p>
        <div
          style={{ border: "1px solid #000", margin: "20px", padding: "0px" }}
          dangerouslySetInnerHTML={createMarkup()}
          contentEditable="true"
        />
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
    </div>
  );
}

export default App;
