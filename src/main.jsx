import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Statistics from './components/Statistics/Statistics';
import Donation from './components/Donation/Donation';
import Donations from './components/Donations/Donations';
import DonationDetail from './components/DonationDetail/DonationDetail';
import { getDonations } from './utilities/fakeDb';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Donations></Donations>,
        loader: () => fetch('donations.json')
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
