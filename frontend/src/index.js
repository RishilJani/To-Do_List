import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import AddTask from './pages/AddTask';
import GetAll from './pages/GetAll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <GetAll /> } />
          <Route path='/add' element={<AddTask />} />
          <Route path='/edit/:n_id' element={<AddTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
