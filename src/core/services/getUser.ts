import { IResponseAPI } from "../common/interfaces/IResponseApi";
import clientAxios from "../config/axios";
import { IUser } from "../common/interfaces/IUser";

export const getUser = async (pin: string): Promise<IUser | undefined> => {
  if (pin !== "") {
    try {
      console.log(pin, "probando pin");
      const user = await clientAxios.get<IResponseAPI<IUser>>(
        `/exotic/user/${pin}`
      );
      return user.data.response;
    } catch (error) {
      console.error(error);
    }
  }

  // Si el pin está vacío o la solicitud falla, devolver undefined
  return undefined;
};
