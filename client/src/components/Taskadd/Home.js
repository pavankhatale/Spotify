import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [p_Data, setp_data] = useState([]);

  const getData = async (e) => {
    const res = await fetch("http://localhost:5000/api/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    //console.log(data);

    if (res.status === 400 || !data) {
    //  console.log("error");
    } else {
      setp_data(data);
      // console.log("data recieved");
    }
  };

  useEffect(() => {
    getData();
  });


  const deleteuser = async (id) => {
    const res2 = await fetch(`http://localhost:5000/api/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deleteData = await res2.json();
    //console.log(deleteData);
    if (res2.status === 422 || !deleteData) {
      console.log(`error while deleting data`);
    } else {
      console.log(`user deleted`);
      getData();
    }
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto  p-5 my-2">
        <h5 className=" mb-4">
          {" "}
          <Link to="/project/add">
            <button type="button" className="btn btn-primary btn-sm">
              Add a project
            </button>
          </Link>
        </h5>
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">Index</th>
              <th scope="col">project Name</th>
              
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
           
            {p_Data.map((element, index) => {
              return(
                <>
              <tr >
                 <th scope="row">{index + 1}</th> 

                <td>{element.name}</td>
               
                <td>
   

                  <Link
                    className="btn btn-success m-2 btn-sm"
                    to={`/project/edit/${element._id}`}
                  >
                    Edit
                  </Link>
                  <Link
                   
                    to="/homet"
                  >
                    Add task
                  </Link>
                  <button
                    className="btn btn-danger m-2 btn-sm"
                    onClick={() => deleteuser(element._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
              </>
              )
              })}  
          </tbody>
        </table>
      </div>
    </div>
  );
};
