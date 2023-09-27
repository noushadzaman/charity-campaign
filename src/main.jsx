import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import DonationDetail from './components/DonationDetail/DonationDetail';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import { getDonations } from './utilities/fakeDb';
import Banner from './components/Banner/Banner';
import ErrorPage from './components/Errorpage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Banner></Banner>
      },
      {
        path: '/donation',
        element: <Donation></Donation>,
        loader: () => fetch('donations.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: getDonations
      },
      {
        path: '/donationdetail/:id',
        loader: () => fetch('donations.json'),
        element: <DonationDetail></DonationDetail>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
