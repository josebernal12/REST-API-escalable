import UserModel from "../models/user";
import { User } from "../interfaces/user.interfaces";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { Auth } from "../interfaces/auth.interfaces";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
  const response = await UserModel.findOne({ email });
  if (response) return "ALREADY_USER";
  const passHash = await encrypt(password);
  const register = await UserModel.create({
    email,
    password: passHash,
    name,
  });
  return register;
};
const loginUser = async ({ email, password }: Auth) => {
  const response = await UserModel.findOne({ email });
  if (!response) return "NOT_FOUND_USER";

  const passwordHash = response.password;
  const iCorrect = await verified(password, passwordHash);
  if (!iCorrect) return "PASSWORD_INCORRECT";
  const token = generateToken(response.email);
  const data = {
    token,
    user: response
  }
  return data;
};
export { registerNewUser, loginUser };
