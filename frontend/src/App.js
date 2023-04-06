import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Design from './Section/Design/Design';
import Development from './Section/Development/Development';
import DevOps from './Section/DevOps/DevOps';
import Main from './Section/Main Page/Main';
import Nav from './Section/Nav';

function App() {
  return (
    <div className="App">
      <Router>
      <div className='ellipse'></div>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/design' element={<Design />}></Route>
          <Route path='/development' element={<Development />}></Route>
          <Route path='/devOps' element={<DevOps />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
