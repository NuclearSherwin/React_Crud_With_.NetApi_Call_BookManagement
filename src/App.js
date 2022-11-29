import Navbar from "./components/navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// components
import IndexComponent from './components/books/index.component'

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<IndexComponent />}>

          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
