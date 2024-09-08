import { StarHalfOutlined, StarBorder, StarRate } from '@mui/icons-material';
import React from 'react';


const Ratings= ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <StarRate key={i}  style={{ fontSize: '16px', color: "#ffbf34" }}  className=" cursor-pointer" />
      );
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(
        <StarHalfOutlined key={i} style={{ fontSize: '16px', color: "#ffbf34" }}  className="cursor-pointer" />
      );
    } else {
      stars.push(
        <StarBorder key={i} style={{ fontSize: '16px', color: "#ffbf34" }}  className="cursor-pointer" />
      );
    }
  }

  return (
    <span className="mx-0.5">
      {stars}
    </span>
  );
};

export default Ratings;