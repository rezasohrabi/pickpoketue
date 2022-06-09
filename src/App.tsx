import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuestionListPage } from 'pages/QuestionListPage';
import { QuestionDetailPage } from 'pages/QuestionDetailPage';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<QuestionListPage />} />
        <Route path='/question/:id' element={<QuestionDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
