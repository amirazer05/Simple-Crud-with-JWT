import axios from "axios";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

export const useUsers = () => {
  const axiosJWT = axios.create();
  const token = useSelector((state) => state.jwt);
  const dispatch = useDispatch();

  const GetUsers = async () => {
    const response = await axiosJWT.get("http://localhost:4000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: "SET_USERS", payload: response.data });
  };

  const GetUserById = async (userId) => {
    const response = await axiosJWT.get(`http://localhost:4000/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  const UpdateUser = async (user) => {
    const response = await axiosJWT.patch(
      `http://localhost:4000/update/${user.id}`,
      {
        ...user,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  const DeleteUser = async (userId) => {
    const response = await axiosJWT.delete(`http://localhost:4000/delete/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    GetUsers();
  };

  return { GetUsers, GetUserById, UpdateUser, DeleteUser };
};
