import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-center text-white text-5xl m-12 bg-gray-500 font-bold ">
      User: {userid}
    </div>
  );
}

export default User;
