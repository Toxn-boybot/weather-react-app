import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { WeatherDataProvider } from "./components/context/WeatherDataProvider";

function App() {
  return (
    <div className="App">
      <WeatherDataProvider>
        <Header />
        <Main />
      </WeatherDataProvider>
    </div>
  );
}

export default App;
