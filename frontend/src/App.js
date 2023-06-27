import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Route from './Components/Route';

import Home from "./Components/Home";
import QnA from "./Components/QnA/QnA";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Jobs from "./Components/Jobs/Jobs";
import ArticleDetails from './Components/Articles/ArticleDetails';
//import Housing from './Components/Housing/pages/Home';
//import Details from './Components/Housing/pages/Details';
import Housing from './Components/Housing/property/Property';
import Details from './Components/Housing/propertyDetails/PropertyDetails';
import Profile from './Components/Profile/Profile';
import HouseForm from './Components/Housing/form/Form';
import Admin from './Components/Admin/Home';
import CompanyReg from './Components/Admin/Components/CompanyReg';
import Report from './Components/Admin/Components/Report';
const router = createBrowserRouter([
  {path: '/', element: <Login />},
  {path:'/signup', element: <Signup />},
  {
    path: '/',
    element: <Route />,
    children: [
      
    {path:'/blogs', element:<Home />},
    {path:'/blogs/:blogId', element: <ArticleDetails />},
    {path:'/qna', element: <QnA />},
    {path:'/jobs', element: <Jobs />},
    {path:'/profile', element: <Profile/>},
    {path:'/housing',element: <Housing />},
    {path:'/housing/:id',element: <Details/> },
    {path:'/housing/add',element:<HouseForm/>},
    {path:'/admin',element:<Admin/>},
    {path:'/admin/companyReg',element:<CompanyReg/>},
    {path:'admin/report',element:<Report/>}
    ]
  }
  
])

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
