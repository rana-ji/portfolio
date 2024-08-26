import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages";
function App() {
  return (
    <main className="bg-slate-300/10">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
