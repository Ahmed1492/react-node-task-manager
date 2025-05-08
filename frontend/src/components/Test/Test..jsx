import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Test = () => {





const location = useLocation();
const task = location.state?.task;
console.log(task); // Use it as needed (like pre-fill a form)









  // handleUpdate();
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit,
      quod laborum optio mollitia est error voluptate natus, ipsum qui,
      voluptatum accusamus quos tenetur iusto. Alias nobis voluptate ratione
      illum.
    </div>
  );
};

export default Test;
