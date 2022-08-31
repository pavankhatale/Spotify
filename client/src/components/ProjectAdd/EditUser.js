import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useNavigate();
 
  const [inp, setInp] = useState({
    name: ""
  });

  const setData = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setInp((preVal) => {
      return {
        ...preVal, 
        [name]: value,
      };
    });
  };
  const { id } = useParams("");
  //console.log(id);



  const updateproject = async (e) => {
    e.preventDefault();

    const { name } = inp;

    const res2 = await fetch(`http://localhost:5000/api/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name
      }),
    });
    const data2 = await res2.json();
    // console.log(data2);

    if (res2.status === 400 || !data2) {
      alert(`please fill the data`);
    } else {
      setInp(data2);
      history('/home')
      alert(`data upadated`);
    }
  };

  return (
    <div className="container">
      <div className="w-50 mx-auto  p-5 my-5">
        <h5 className=" mb-4">Edit Supplier Information</h5>
        <form >
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-sm btn-sm my-2"
              style={{ width: 300 }}
              placeholder="project Name"
              name="name"
              value={inp.name}
              onChange={setData}
            />
          </div>
         
          <button  type="submit" style={{ width: 300 }}
            onClick={updateproject} className="btn btn-warning btn-sm btn-block my-3">Update Supplier</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
