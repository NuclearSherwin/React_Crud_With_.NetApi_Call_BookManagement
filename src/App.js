import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";

// components
import IndexComponent from './components/books/index.component'
import CreateComponent from './components/books/create.component'
import EditComponent from "./components/books/edit.component";
import LoginComponent from "./components/login.component";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<IndexComponent />}>
            <Route index element={<IndexComponent />} />
          </Route>
          <Route path="/create" element={<CreateComponent />} />
          <Route path="/edit/:id" element={<EditComponent />} />
          <Route path="/login" element={<LoginComponent />} /> 
        </Routes>
      </div>
    </>
  );
}

export default App;
