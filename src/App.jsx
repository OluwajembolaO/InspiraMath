import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./authentication/auth";
import Hub from "./pages/hub";
import About from './pages/about';


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Hub />}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
