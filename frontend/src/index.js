import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import AddTask from './pages/AddTask';
import GetAll from './pages/GetAll';
import EditTask from './pages/EditTask';
import Search from './pages/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GetAll />} />
        </Route>
        <Route path='/add' element={<AddTask />} />
        <Route path='/edit/:n_id' element={<EditTask />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  </>
);

