import { useEffect, useState } from "react";
import axios from "axios";
import { IUser } from "../types/types";
import { useParams, useNavigate } from "react-router-dom";

export type UserItemPageParams = {
  id: string;
};

export const UserItemPage = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const navigate = useNavigate();

  useEffect(() => {
    void fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${params.id || ""}`
      );
      setUser(response.data);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <button onClick={() => navigate("/users")}>Back</button>
      <h1>{user?.name}'s page</h1>
      <p>{user?.email}</p>
      <p>
        {user?.address.zipcode}, {user?.address.city}, {user?.address.street}
      </p>
    </div>
  );
};
