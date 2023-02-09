import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './scenes/Welcome';
import Content from './scenes/Content';
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import './App.css';

export const AuthContext = createContext(null)

function App() {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Routes>
          {/* {user && <Route path='/secret' element={<Content />}} */}
          {/* only if user has a value can you redirect them to secrests */}
          <Route path='/secret' element={(user) ? <Content /> : <Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route exact path='/' element={<Welcome />} />
        </Routes>
      </header>
    </div>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
