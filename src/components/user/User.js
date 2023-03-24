import axios from "axios";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

function User() {
  let { state } = useLocation();
  console.log(state);
  return <div>User</div>;
}

export default User;
