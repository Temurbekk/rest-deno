import { v4 } from "https://deno.land/std/uuid/mod.ts";
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

const getUser = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const product: User | undefined = users.find((user) =>
    params.id === params.id
  );

  if (product) {
    response.status = 200;
    response.body = {
      success: true,
      data: product,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: `No user with id: ${params.id} found`,
    };
  }
};

// @desc Add user
// @route POST api/v1/users

const addUser = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 404;
    response.body = {
      success: false,
      msg: "Could not add",
    };
  } else {
    const user: User = body.value;
    user.id = v4.generate();
    users.push(user);
    response.status = 201;
    response.body = {
      success: true,
      data: user,
    };
  }
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
