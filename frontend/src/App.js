import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Route from "./Components/Route";

import Home from "./Components/Home";
import QnA from "./Components/QnA/QnA";
import Signup from "./Components/Signup/Signup";
import Company_Signup from "./Components/Signup/Company_Signup";
import Login from "./Components/Login/Login";
import Jobs from "./Components/Jobs/Jobs";
import ArticleDetails from "./Components/Articles/ArticleDetails";
import JobDashBoard from "./Components/JobAdmin/JobDashBoard";
import Admin from "./Components/Admin/Admin";
//import Housing from './Components/Housing/pages/Home';
//import Details from './Components/Housing/pages/Details';
import Housing from "./Components/Housing/property/Property";
import Details from "./Components/Housing/propertyDetails/PropertyDetails";
import Profile from "./Components/Profile/Profile";
import HouseForm from "./Components/Housing/form/Form";
import Therapists from "./Components/Therapists/Therapists";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/Company_Signup", element: <Company_Signup /> },
  {
    path: "/",
    element: <Route />,
    children: [
      { path: "/blogs", element: <Home /> },
      { path: "/blogs/:blogId", element: <ArticleDetails /> },
      { path: "/qna", element: <QnA /> },
      { path: "/jobs", element: <Jobs /> },
      { path: "/profile", element: <Profile /> },
      { path: "/housing", element: <Housing /> },
      { path: "/housing/:id", element: <Details /> },
      { path: "/housing/add", element: <HouseForm /> },
      { path: "jobdashboard", element: <JobDashBoard /> },
      { path: "admin", element: <Admin /> },
      { path: "/therapists", element: <Therapists /> },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
