import Home from "../pages/Home";
import AboutPage from "../pages/About";
import Layouts from "../components/layouts";

const routes = () => [
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutPage />,
      }
    ],
  },
];

export default routes;