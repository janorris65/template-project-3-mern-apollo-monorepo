import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthContext from "./contexts/auth";
import Layout from "./layouts/layout";
import { About, Login } from "./pages";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default function App() {
  return (
    // TODO: Add a value using Apollo Client's useQuery hook (use {} for INTERPOLATION)
    <AuthContext.Provider value="">
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}
