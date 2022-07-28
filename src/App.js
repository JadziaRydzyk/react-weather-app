import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container ">
        <Weather defaultCity="Katowice" />
        <footer>
          <a
            className="GitHubLink"
            href="https://github.com/JadziaRydzyk/react-weather-app"
            target="_blank "
          >
            Look at my GitHub repository
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
