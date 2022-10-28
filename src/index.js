import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import BarPresentation from './pages/BarPresentation';
import ListOfBar from './pages/ListOfBar';


//On défini l'ensemble de nos routes ici :
const router = createBrowserRouter([

  //Ici on indique l'élément que vas prendre la première page de notre Site.
  {
    path: '/',
    element: <Home/>,
  },
  //Ensuite on définit l'ensemble des autres page de notre site.
  {
    //chemin à appeller + composat page qui correspond (ne pas oublier d'import le composant)
    path: '/barPresentation',
    element: <BarPresentation/>,
  },
  {
    //chemin à appeller + composat page qui correspond (ne pas oublier d'import le composant)
    path: '/listOfBar/barInformation/:id',
    element: <BarPresentation/>,
  },
  {
    //chemin à appeller + composat page qui correspond (ne pas oublier d'import le composant)
    path: '/listOfBar/barInformation/',
    element: <BarPresentation/>,
  },
  {
    path: '/ContactUs',
    element: <ContactUs/>,
  },
  {
    path: '/ListOfBar',
    element: <ListOfBar/>,
  },
])



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
