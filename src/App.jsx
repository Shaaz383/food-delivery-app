import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";



function App() {
  return (
    <>
     

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<ProtectedRoute element={<Success />} />} />
          <Route path="/*" element={<Error />} />
        
          {/* More routes as needed */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
