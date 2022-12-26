import React, { Suspense } from 'react';
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import AboutUsPage from "./AboutUsPage.jsx";
import PricingPage from "./PricingPage.jsx";
import Features from "./Features.jsx";
import Examples from "./Examples.jsx";
// import ClassComponent from "./Component/ClassComponent/ClassRoute.jsx";

const ClassComponent = React.lazy(() => import('./Component/ClassComponent/ClassRoute'))
const FunctionalComponent = React.lazy(() => import('./Component/FunctionalComponent/FunctionalRoute'))
// const Product = React.lazy(() => import('./ClassComponent'))
const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    }, {
        path: "/about",
        element: <AboutUsPage />,
    }, {
        path: "/pricing",
        element: <PricingPage />,
    }, {
        path: "/features",
        element: <Features />,
    }, {
        path: "/examples",
        element: <Examples />,
        children: [
            {
              path: "classcomponent/*",
              element: <Suspense fallback={<h2>Loading...</h2>}><ClassComponent /></Suspense> ,
            },
            {
              path: "functionalcomponent/*",
              element: <Suspense fallback={<h2>Loading...</h2>}><FunctionalComponent /></Suspense> ,
            },
          ],
    },
]);
export default MainRoutes;