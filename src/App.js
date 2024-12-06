import ComponentName from "./demo";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<ComponentName />} />
    </Routes>
  </Router>

  );
}

export default App;
