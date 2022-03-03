import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useUsers } from "../utils/users";
const EditUser = ({ params }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState();
  const history = useHistory();
  const { GetUserById, UpdateUser } = useUsers();
  const { id } = useParams();

  useEffect(() => {
    GetUserById(id).then((user) => {
      setUserId(user.id);
      setName(user.name);
      setEmail(user.email);
    });
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    UpdateUser({ id: userId, name, email });
    history.push("/dashboard");
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="field">
          <label className="label">Name</label>
          <input className="input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label className="label">Email</label>
          <input className="input" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="field">
          <button className="button is-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
