import React, { lazy } from 'react'
import Loadable from 'components/Loadable/Loadable'

const Restaurant = Loadable(lazy(() => import('./Restaurant')))

const RestaurantRoutes = [
    {
        path: '/restaurant',
        element: <Restaurant />,
    },
]
   
export default RestaurantRoutes