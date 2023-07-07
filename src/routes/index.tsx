import Home from "../pages/Home";
import AboutPage from "../pages/About";
import WorkPage from "../pages/Work";
import ContactPage from "../pages/Contact";
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
      },
      {
        path: "work",
        element: <WorkPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
];

export default routes;