import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Route from './Components/Route';

import Home from "./Components/Home";
import QnA from "./Components/QnA/QnA";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Jobs from "./Components/Jobs/Jobs";
import ArticleDetails from './Components/Articles/ArticleDetails';


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
    {path:'/jobs', element: <Jobs />}
    ]
  }
  
])

function App() {
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
