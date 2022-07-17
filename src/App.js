import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Router } from "./routes/Routes";

function App() {
  return (
    <div>
      <NavBar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
