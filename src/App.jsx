import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login";
import AuthHeaderLayout from "./layout/authHeaderLayout";
import Signup from "./pages/Signup";

function App() {
  // authRouter will contain our entire routing data
  // createBrowserRouter uses DOM history API to update the URL in browser
  // and manage the history stack, like if we press back button
  const authRouter = createBrowserRouter(
    // createRoutesFromElements will convert our JSX elements into routes
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<AuthHeaderLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Route>,
    ),
  );
  return <RouterProvider router={authRouter} />;
}

export default App;
