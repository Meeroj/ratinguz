import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import "./index.css";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import DavlatSection from "./pages/rating/otm/davlat-sectori.tsx";
import NodavlatSection from "./pages/rating/otm/nodavlat-sectori.tsx";
import AllSection from "./pages/rating/otm/umumiy.tsx";
import { Navbar } from "./components/Navbar.tsx";
import Vacancy from "./pages/vacancy/page.tsx";
import CompareOTM from "./pages/compare/otm/page.tsx";

const route = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/vacancy',
    element: <Vacancy/>
  },
  {
    path: 'rating/otm',
    element: <Outlet/>,
    children: [
      {
        path: 'davlat',
        element: <DavlatSection/>
    
      },
      {
        path: 'nodavlat',
        element: <NodavlatSection/>
    
      },
      {
        path: 'umumiy',
        element: <AllSection/>
    
      },
    ]
  },
  {
    path: 'compare',
    element: <Outlet/>,
    children: [
      {
        path: 'otm',
        element: <CompareOTM/>
    
      },
      {
        path: 'nodavlat',
        element: <NodavlatSection/>
    
      },
      {
        path: 'umumiy',
        element: <AllSection/>
    
      },
    ]
  },
  {
    path: "*",
    element: <h1>404 not found</h1>
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Navbar/>
      <RouterProvider router={route}/>
    </ThemeProvider>
  </React.StrictMode>
);
