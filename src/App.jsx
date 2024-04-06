import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkIsUserLoggedIn } from "./redux/slices/authSlice";

import Login from "./pages/Login";
import AuthHeaderLayout from "./layout/authHeaderLayout";
import Signup from "./pages/Signup";
import MainHeaderLayout from "./layout/MainHeaderLayout";
import TravelBlogPage from "./pages/TravelBlog";

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

  const mainRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<MainHeaderLayout />}>
          <Route path="/" element={<TravelBlogPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Route>,
    ),
  );
  // initialitze dispatcher hook
  const dispatcher = useDispatch();
  // call the action function to check and update the isLoggedIn state
  dispatcher(checkIsUserLoggedIn());
  // fetch the isLoggedIn state variable using selector hook
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // this component will run whenever there is a change in the isLoggedIn state
  if (!isLoggedIn) {
    return <RouterProvider router={authRouter} />;
  }
  return <RouterProvider router={mainRouter} />;
}

export default App;
