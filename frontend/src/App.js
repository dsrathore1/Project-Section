import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import { auth } from "./firebaseConfig";

function App() {
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        setUserName(user.displayName);
        setEmail(user.email);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home name={userName} email={email} />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
