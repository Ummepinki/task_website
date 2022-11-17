import React from "react";
import { Button } from "react-bootstrap";
import img2 from "../../assets/img-2.png";
const Section1 = () => {
  return (
    <div className="mx-auto d-flex mt-5 justify-content-center m-0 p-0 ">
      <div className="mt-5 ms-1  w-25 ">
        <h1 className="fs-1">As a veterinarian and lover of animals</h1>
        <p>
          I have always loved animals. My desire to help them has led to a
          possible career path: becoming a veterinarian.
        </p>

        <Button className="m-2" variant="warning">
          Contract Us
        </Button>
      </div>

      <div>
        <img className="w-100 h-100  ms-2 px-2" src={img2} alt="/" />
      </div>
    </div>
  );
};

export default Section1;
