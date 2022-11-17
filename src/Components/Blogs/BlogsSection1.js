import React from "react";
import img9 from "../../assets/img-9.png";
import img10 from "../../assets/img-10.png";
import img11 from "../../assets/img-11.png";
const BlogsSection1 = () => {
  return (
    <div className="m-5 p-5">
      <h2 className="text-center mt-1 mb-2  ">Recent Posts</h2>
      <p className="text-center m-2 mb-2 p-2 h2  "> Recent Posts</p>
      <div class="row row-cols-1 row-cols-md-3 g-0">
        <div class="col">
          <div class="card" style={{ width: "18rem" }}>
            <img src={img9} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">As a veterinarian and lover of animals</h5>
              <h6 class="card-title text-primary">NOVEMBER 15 2022</h6>
              <p class="card-text">
                Our team is made up of individuals who embody these values in
                the work they do every day.
              </p>
              <p class="card-text text-primary">Read More+</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{ width: "18rem" }}>
            <img src={img10} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">As a veterinarian and lover of animals</h5>
              <h6 class="card-title text-primary">NOVEMBER 15 2022</h6>
              <p class="card-text">
                Our team is made up of individuals who embody these values in
                the work they do every day.
              </p>
              <p class="card-text text-primary">Read More+</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{ width: "18rem" }}>
            <img src={img11} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">As a veterinarian and lover of animals</h5>
              <h6 class="card-title text-primary">NOVEMBER 15 2022</h6>
              <p class="card-text">
                Our team is made up of individuals who embody these values in
                the work they do every day.
              </p>
              <p class="card-text text-primary">Read More+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection1;
