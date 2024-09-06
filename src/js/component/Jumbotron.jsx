import React from "react";

const Jumbotron = ({title,link1,link2,link3,link4}) => {
    return (
        <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">A Warm Welcome!</h1>
          <p class="col-md-8 fs-4">Welcome to Tea Haven, where tea enthusiasts find their dream teapots. Explore our curated collection of elegant, durable, and stylish teapots designed to enhance your tea experience. From classic porcelain to modern glass and whimsical ceramics, each teapot combines beauty and functionality. </p>
          <button class="btn btn-primary btn-lg" type="button">Example button</button>
        </div>
      </div>
      
    )
}

export default Jumbotron