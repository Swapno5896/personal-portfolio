import React from 'react';
import './MyNavbar.css'
const MyNavbar = () => {
  return (
    <div>

      <nav class="navbar navbar-expand-lg  fixed-top " style={{ backgroundColor: '#cab3b3' }}>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand myName" href="#">Swapno Mondol</a>
          <ul class="navbar-nav ms-auto mt-3 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="#">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link resume" href="#">Resume</a>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  );
};

export default MyNavbar;