const userDB = [
  {
    id: 1,
    name: "addison",
    email: "addison@test.com",
    password: "123456",
    role: "admin",
  },
  {
    id: 2,
    name: "Joyce",
    email: "Joyce@test.com",
    password: "123456",
    role: "user",
  },
];
import jwt from "jsonwebtoken";

export class AuthService {
  static loginService(email, pass) {
    try {
      const userfilter = userDB.find((user) => user.email === email);
      if (!userfilter) {
        throw {
          error: true,
          statusCode: 401,
          msg: "Credendiales erroneas",
        };
      }
      if (userfilter.password !== pass) {
        throw {
          error: true,
          statusCode: 401,
          msg: "Credendiales erroneas",
        };
      }
      const { password, ...userData } = userfilter;
      const token = jwt.sign(userData, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      return { userData, token };
    } catch (error) {
      throw error;
    }
  }
}
