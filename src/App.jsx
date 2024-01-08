import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { WeatherDataProvider } from "./components/context/WeatherDataProvider";
import { ToastContainer } from "react-toastify";

const toastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  
};

function App() {
  return (
    <div className="App">
      <WeatherDataProvider>
        <Header />
        <Main />
      </WeatherDataProvider>
      <ToastContainer {...toastOptions} />
    </div>
  );
}

export default App;
