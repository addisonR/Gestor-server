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

export class AuthService {
  static loginService(email, password) {
    try {
      const userfilter = userDB.find((user) => user.email === email);
      if (!userfilter) {
        throw {
          error: true,
          statusCode: 401,
          msg: "Credendiales erroneas",
        };
      }
      if (userfilter.password !== password) {
        throw {
          error: true,
          statusCode: 401,
          msg: "Credendiales erroneas",
        };
      }
      const userData = {
        id: userfilter.id,
        name: userfilter.name,
        email: userfilter.email,
        role: userfilter.role,
        token: "as54d5.6asd1asd61as8das1d.6a48w4q84sef4df9",
      };
      return userData;
    } catch (error) {
      throw error;
    }
  }
}
