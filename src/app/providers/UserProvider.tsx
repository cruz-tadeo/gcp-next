import { Dispatch, SetStateAction, createContext, useState } from "react";
import { IUser } from "src/core/common/interfaces/IUser";
interface IUserContext {
  isAuth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}
export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }) => {
  const [isAuth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({
    currency: "",
    email: "",
    name: "",
    nivel: "",
    pin: "",
    status: "",
  });

  const value = {
    isAuth,
    setAuth,
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
