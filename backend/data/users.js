import bcrypt from "bcryptjs";

const Users = [
  {
    name: "Admin User",
    email: "admin@animestore.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "Ninad",
    email: "ninad@animestore.com",
    password: bcrypt.hashSync("123456", 10),
  },

  {
    name: "Muranjan",
    email: "muranjan@animestore.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default Users;
