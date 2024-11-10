import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import StudentDashboard from '../src/pages/studentdashboard';
import Login_Page from './pages/login-page';
import Signup_Page from './pages/signup-page';
import Attendance from './pages/attendance';
import Classroom from './pages/classroom-page';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path='/' element={<Login_Page/>}/>
        <Route path='/signup' element={<Signup_Page/>}/>
        <Route path='/attendance' element={<Attendance/>}/>
        <Route path='/classroom' element={<Classroom/>}/>

      </Routes>
    </Router>
  );
}

export default App;
