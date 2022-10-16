import { FC, useEffect, useState } from "react";
import axios from "axios";
import { IUser } from "../types/types";
import { List } from "../components/List";
import { UserItem } from "../components/UserItem";
import { useNavigate } from "react-router-dom";

export const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    void fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem
          onClick={(user) => navigate(`/users/${user.id}`)}
          user={user}
          key={user.id}
        />
      )}
    />
  );
};
