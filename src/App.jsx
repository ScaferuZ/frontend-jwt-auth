import {
  BrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
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
import { useEffect } from "react";

function App() {
  // initialitze dispatcher hook
  const dispatcher = useDispatch();
  // call the action function to check and update the isLoggedIn state
  useEffect(() => {
    dispatcher(checkIsUserLoggedIn());
  }, [dispatcher]);
  // fetch the isLoggedIn state variable using selector hook
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route>
              <Route path="/" element={<AuthHeaderLayout />}>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Route>
            ,
          </>
        ) : (
          <>
            <Route>
              <Route path="/" element={<MainHeaderLayout />}>
                <Route path="/" element={<TravelBlogPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Route>
            </Route>
            ,
          </>
        )}
      </Routes>
    </BrowserRouter>
  );

  // // authRouter will contain our entire routing data
  // // createBrowserRouter uses DOM history API to update the URL in browser
  // // and manage the history stack, like if we press back button
  // const authRouter = createBrowserRouter([
  //   // createRoutesFromElements will convert our JSX elements into routes
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<AuthHeaderLayout />}>
  //         <Route path="/" element={<Login />} />
  //         <Route path="/signup" element={<Signup />} />
  //         <Route path="*" element={<Navigate to="/" replace />} />
  //       </Route>
  //     </Route>,
  //   ),
  // ]);

  // const mainRouter = createBrowserRouter([
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path="/" element={<MainHeaderLayout />}>
  //         <Route path="/" element={<TravelBlogPage />} />
  //         <Route path="*" element={<Navigate to="/" replace />} />
  //       </Route>
  //     </Route>,
  //   ),
  // ]);
}

export default App;
