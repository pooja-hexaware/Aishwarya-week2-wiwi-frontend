import React, { lazy } from 'react'
import Loadable from 'components/Loadable/Loadable'
const Topping = Loadable(lazy(() => import('./Topping')))
const ToppingRoutes = [
    {
        path: '/topping',
        element: <Topping/>,
    },
]
export default ToppingRoutes 