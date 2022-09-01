import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Milk() {
  return (
    <>
      <h1>Milk</h1>
      <div className="flex">
        <card>1</card>
        <card>2</card>
        <card>3</card>
      </div>
    </>
  );
}

export default Milk;
