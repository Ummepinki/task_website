import React from "react";
import { Button } from "react-bootstrap";
import img1 from "../../assets/img-1.png";
const Banner = () => {
  return (
    <div className="bg-warning  justify-content-center d-flex mx-auto m-0 p-0   ">
      <div className="mt-1 ms-3 m-3 p-5 w-50 align-self-center">
        <h1 className="h1">First I wanted to be a veterinarian</h1>
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
        <img className="w-75 h-75 ms-2 mt-3 " src={img1} alt="/" />
      </div>
    </div>
  );
};

export default Banner;
