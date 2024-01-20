import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData(); // This will get Data from func through main.jsx file

  /* 
  Calling Github API:

  const [data, setData] = useState([]);
  fetch("https://api.github.com/users/huzaifak08")
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      setData(responseData);
    });

    Thats one way of calling the API, but using "Loader" will call the API
    as soon as the user hover the button of this page for routing.
    ----> See the Func "GithubInfoLoader.js" file
    */

  return (
    <>
      <div className="text-center bg-gray-400 text-4xl font-bold">
        Github Followers: {data.followers}
      </div>
      <img src={data.avatar_url} alt="git pic" width={200} />
    </>
  );
}

export default Github;
