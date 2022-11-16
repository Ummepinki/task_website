import React from "react";
import { Button } from "react-bootstrap";
import img1 from "../../assets/img-1.png";
const Banner = () => {
  return (
    <div className="bg-warning m-0 p-0   ">
      <div className="mx-auto d-flex mt-5 w-50  ">
        <div className="mt-5 ms-1">
          <h1>First I wanted to be a veterinarian</h1>
          <p>
            I have always loved animals. My desire to help them has led to a
            possible career path: becoming a veterinarian.
          </p>

          <Button className="m-2" variant="primary">
            Contract Us
          </Button>
          <Button variant="outline-secondary">Our Service</Button>
        </div>

        <div>
          <img className="w-100 h-100  " src={img1} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
