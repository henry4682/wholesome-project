import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Update from './components/Update';

function User() {
  return (
    <BrowserRouter>
      <Route>
        <Route path="user/update" element={<Update />} />
      </Route>
    </BrowserRouter>
  );
}

export default User;
