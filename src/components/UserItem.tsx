import { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

export const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  const {
    id,
    name,
    address: { city, street },
  } = user;
  return (
    <div
      onClick={() => onClick(user)}
      style={{
        padding: 15,
        border: "1px solid grey",
        cursor: "pointer",
        marginBottom: 10,
      }}
    >
      {id}. {name} lives in city {city} on {street} street.
    </div>
  );
};
