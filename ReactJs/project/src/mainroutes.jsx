import React, { Suspense } from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutUsPage from "./AboutUsPage.jsx";
import PricingPage from "./PricingPage.jsx";
import Features from "./Features.jsx";
// import ClassComponent from "./Component/ClassComponent/ClassRoute.jsx";

// const ClassComponent = React.lazy(() => import('./Component/ClassComponent/ClassRoute'))
// const FunctionalComponent = React.lazy(() => import('./Component/FunctionalComponent/FunctionalRoute'))
// const Product = React.lazy(() => import('./ClassComponent'))
// element: <HomePage />,
const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element:<Navigate to="/home" replace />
    },{
        path: "/home",
        element: <HomePage />,
    },  {
        path: "/about",
        element: <AboutUsPage />,
    }, {
        path: "/pricing",
        element: <PricingPage />,
    }, {
        path: "/features",
        element: <Features />,
    }
    // , {
    //     path: "/examples",
    //     element: <Examples />,
    //     children: [
    //         {
    //           path: "classcomponent/*",
    //           element: <Suspense fallback={<h2>Loading...</h2>}><ClassComponent /></Suspense> ,
    //         },
    //         {
    //           path: "functionalcomponent/*",
    //           element: <Suspense fallback={<h2>Loading...</h2>}><FunctionalComponent /></Suspense> ,
    //         },
    //       ],
    // },
]);
export default MainRoutes;