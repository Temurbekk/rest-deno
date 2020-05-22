import { User } from "../models/user.ts";

let users: User[] = [
  {
    id: "1",
    name: "User One",
  },
  {
    id: "2",
    name: "User Two",
  },
  {
    id: "3",
    name: "User Three",
  },
];

// @desc Get all users
// @route GET api/v1/users

const getUsers = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: users,
  };
};

// @desc Get single user
// @route GET api/v1/users/:id

const getUser = ({ response }: { response: any }) => {
};

// @desc Add user
// @route POST api/v1/users

const addUser = ({ response }: { response: any }) => {
};

// @desc Update user
// @route PUT api/v1/users/:id

const updateUser = ({ response }: { response: any }) => {
};

// @desc Delete User
// @route DELETE api/v1/users/:id

const deleteUser = ({ response }: { response: any }) => {
};

export { getUsers, getUser, addUser, updateUser, deleteUser };
