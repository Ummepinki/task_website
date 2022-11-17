import React from "react";
import { Button } from "react-bootstrap";
import dog1 from "../../assets/dog-1.png";
import dog2 from "../../assets/dog-2.png";
import dog3 from "../../assets/dog-3.png";
const BlogsSection2 = () => {
  return (
    <div className="bg-warning">
      <h1 className="text-center mt-5 ">Title Here</h1>
      <p className=" text-center">
        I have always loved animals. My desire to help them has led to a
        possible career path: becoming a veterinarian
      </p>
      <div className="d-flex  justify-content-center gap-5 text-center">
        <div>
          <img src={dog1} alt="/" />
          <h2 className="text-center mt-2">$30</h2>
          <Button className="m-2" variant="primary">
            Buy Now
          </Button>
        </div>
        <div>
          <img src={dog2} alt="/" />
          <h2 className="text-center mt-2">$25</h2>
          <Button className="m-2" variant="primary">
            Buy Now
          </Button>
        </div>
        <div>
          <img src={dog3} alt="/" />
          <h2 className="text-center mt-2">$20</h2>
          <Button className="m-2" variant="primary">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection2;
