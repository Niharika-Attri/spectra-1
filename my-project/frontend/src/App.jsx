import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import StudentDashboard from '../src/pages/studentdashboard';
import Layout from './components/layout';
import Login_Page from './pages/login-page';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/dashboard" element={
          <Layout>
            <StudentDashboard />
          </Layout>
          } />
        <Route path='/login' element={<Login_Page/>}/>
      </Routes>
    </Router>
  );
}

export default App;
