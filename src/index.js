import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import reportWebVitals from './reportWebVitals';
import Hero from './components/Hero.jsx';
import ListYourProperty from './components/ListYourProperty.jsx';
import LocationDetail from './components/Pages/locationDetail.jsx';
import Feature from './components/Pages/Feature&amenities.jsx';
import PriceDetail from './components/Pages/PriceDetail.jsx';
import PropertyImages from './components/Pages/PropertyImages.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Hero />} />
      <Route path="list-your-property" element={<ListYourProperty />} />
      <Route path="pages/location-details" element={<LocationDetail />} />
      <Route path="pages/features" element={<Feature />} />
      <Route path="pages/price-detail" element={<PriceDetail />} />
      <Route path="pages/property-images" element={ <PropertyImages /> } />
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
