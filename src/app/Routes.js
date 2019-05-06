import React from "react";
import Loadable from 'react-loadable';

import Loading from './modules/loading/Loading';

const Home = Loadable({
  loader: () => import("./modules/home/Home"),
  loading: () => <Loading />,
});

const Blog = Loadable({
  loader: () => import("./modules/blog/Blog"),
  loading: () => <Loading />,
});

const Introduction = Loadable({
  loader: () => import("./modules/introduction/Introduction"),
  loading: () => <Loading />,
});

const Contact = Loadable({
  loader: () => import("./modules/contact/Contact"),
  loading: () => <Loading />,
});

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/blog",
    component: Blog
  },
  {
    path: "/introduction",
    component: Introduction
  },
  {
    path: "/contact",
    component: Contact
  }
]
