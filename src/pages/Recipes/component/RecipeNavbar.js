import React from 'react'
import { Link } from 'react-router-dom';

function RecipeNavbar() {
  return (
    <div className="navbar recipe-navbar d-flex container-fluid">
        {/* TODO:類別 */}
        <Link to="/recipes/飲品">飲品</Link>
        <Link to="/recipes/烘焙">烘焙</Link>
        <Link to="/recipes/輕食">輕食</Link>
      </div>
  )
}

export default RecipeNavbar