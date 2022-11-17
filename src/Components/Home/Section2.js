import React from "react";
import img4 from "../../assets/img-4.png";
import img5 from "../../assets/img-5.png";
import img9 from "../../assets/img-9.png";
const Section2 = () => {
  return (
    <div className="bg-warning">
      <h1 className="text-center mt-5 ">Title Here</h1>
      <p className=" text-center">
        I have always loved animals. My desire to help them has led to a
        possible career path: becoming a veterinarian
      </p>
      <div className="d-flex  justify-content-center gap-5 text-center">
        <div>
          <img src={img4} alt="/" />
          <h2 className="text-center mt-2">Veterinarian</h2>
          <p>
            <small>Veterinarians care for the health of animals.</small>
          </p>
        </div>
        <div>
          <img src={img5} alt="/" />
          <h2 className="text-center mt-2">Veterinarian</h2>
          <p>
            <small>Veterinarians care for the health of animals.</small>
          </p>
        </div>
        <div>
          <img src={img9} alt="/" />
          <h2 className="text-center mt-2">Veterinarian</h2>
          <p>
            <small>Veterinarians care for the health of animals.</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
