import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ErrorPage from './error-page';
import App from './App';
import Quizzes from './Pages/QuizzesPage'; // Assuming Quizzes is a component in Quizzes.js
import CodeSprint from './Pages/codeSprintPage'; // Assuming CodeSprint is a component in CodeSprint.js
import CodeCombat from './Pages/codeCombat';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BoxCricket from './Pages/BoxCricket';


const root = ReactDOM.createRoot(document.getElementById('root'));

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/Quizzes" element={<Quizzes />} />
    <Route path="/CodeSprint" element={<CodeSprint />} />
    <Route path="/CodeCombat" element={<CodeCombat />} />
    <Route path="/BoxCricket" element={BoxCricket}></Route>
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

root.render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
