import { BrowserRouter as Router, Route, redirect, Routes } from 'react-router-dom';

import UserInfoForm from './components/UserInfoForm';
import SecondPage from './components/SecondPage';
import "./styling/userInfo.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/"  element={<UserInfoForm />} />
        <Route path="/second-page" element={<SecondPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
