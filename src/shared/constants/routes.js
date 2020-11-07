export const ROUTES = {
  HOME: "/",
  USERS: {
    LIST: "/users",
    VIEW: "/users/:id",
    NEW: "/users/new",
    EDIT: "/users/edit/:id",
    PARSE: {
      VIEW: (id) => `/users/${id}`,
      EDIT: (id) => `/users/edit/${id}`,
    },
  },
  LOGIN: "/login",
};
