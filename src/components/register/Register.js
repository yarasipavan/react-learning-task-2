import { set, useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  //state
  let [err, setErr] = useState("");

  //navigate hook function
  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //on submit function
  const onSubmit = async (userObj) => {
    try {
      // save the user details in json server
      let response = await axios.post("http://localhost:4000/users", userObj);
      if (response.status == 201) {
        //set err state with empty
        setErr("");
        reset();

        //navigate to userslist
        navigate("/users-list");
      }
    } catch (err) {
      //set err state
      setErr(err.message);
    }
  };
  return (
    <div>
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto">
          {err && <p className="text-danger fs-3">{err}</p>}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-start border border-primary p-3 bg-dark text-light"
            style={{ borderRadius: "20px" }}
          >
            <h4 className="text-center mb-3">Register</h4>

            <div className="mb-3">
              <label htmlFor="name" className="mb-1">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter email"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <p className="text-danger">Enter name</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="mb-1">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <p className="text-danger">Enter email</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="dob" className="mb-1">
                Date Of Birth
              </label>
              <input
                type="date"
                className="form-control"
                {...register("dob", { required: true })}
              />
              {errors.dob?.type === "required" && (
                <p className="text-danger">Enter date of birth</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="mb-1">
                Image Url
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter image url..."
                {...register("image", { required: true })}
              />
              {errors.image?.type === "required" && (
                <p className="text-danger">Enter image url</p>
              )}
            </div>

            <div>
              <button className="btn btn-outline-success  mx-auto">
                Register
              </button>
            </div>
          </form>
          <button
            className="btn btn-outline-warning  float-end mt-3"
            onClick={() => {
              navigate("/users-list");
            }}
          >
            Users List -->
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
