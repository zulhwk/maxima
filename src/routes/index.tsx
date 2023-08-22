import Home from "../pages/Home";
import AboutPage from "../pages/About";
import WorkPage from "../pages/Work";
import ContactPage from "../pages/Contact";
import Layouts from "../components/layouts";
import BlogPage from "../pages/Blog";
import BlogDetailPage from "../pages/BlogDetail";

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
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "blog/:slug",
        element: <BlogDetailPage />,
      }
    ],
  },
];

export default routes;