
import React, { lazy } from 'react'

import Loadable from 'components/Loadable/Loadable'

//import Restaurant from 'views/restaurant/Restaurant'



const Home = Loadable(lazy(() => import('./Home')))



const employeeRoutes = [

    {

        path: '/home',

        element: < Home/>,

    },



    // {

    //     path: '/restaurant',

    //     element: < Restaurant/>,

    // },

 

]



export default employeeRoutes