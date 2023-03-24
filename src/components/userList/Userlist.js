import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Userlist.css";

function Userlist() {
  let navigate = useNavigate();
  //state
  let [users, setUsers] = useState([]);
  let [fetched, setFetched] = useState(0);

  //get the users data from json server
  const getUserdata = async () => {
    let response = await axios.get("http://localhost:4000/users");
    setUsers(response.data);
  };
  useEffect(() => {
    setTimeout(() => {
      getUserdata();
      setFetched(1);
    }, 2000);
  }, []);

  return (
    <div>
      <h4 className="text-center">Users list</h4>

      {!fetched && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {fetched && users.length == 0 ? (
        <p className="text-danger text-center fs-4">No users</p>
      ) : (
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
            {users.map((userObj) => (
              <div
                className=" mx-auto text-center mb-4"
                key={userObj.id}
                style={{ maxWidth: "350px" }}
              >
                <div className="card h-100 shadow">
                  <div className="profile-pic">
                    <img
                      src={userObj.image}
                      alt="user passsport size "
                      style={{ borderRadius: "50%" }}
                      className="mx-auto p-3 "
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="mt-4">
                    <h5>{userObj.name}</h5>
                  </div>
                  <div className="mt-4">
                    <h5>
                      <button
                        className="btn btn-outline-success mb-4"
                        onClick={() => {
                          navigate(`/user/${userObj.id}`, { state: userObj });
                        }}
                      >
                        Profile
                      </button>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Userlist;
