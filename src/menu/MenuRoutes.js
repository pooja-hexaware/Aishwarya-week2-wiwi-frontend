import React, { lazy } from 'react'
import Loadable from 'components/Loadable/Loadable'
const Menu = Loadable(lazy(() => import('./Menu')))
const MenuRoutes = [
    {
        path: '/menu',
        element: <Menu />,
    },
]
export default MenuRoutes 



   