import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home  />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
