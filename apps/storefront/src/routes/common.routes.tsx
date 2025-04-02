import { NotFoundPage } from '@shared/404'
import { RouteObject } from 'react-router-dom'
import Dashboard from '../layout/Dashboard'
import Layout from '../layout/Layout'

export const mainLayoutRoute: RouteObject = {
  path: '/',
  element: <Layout />,
  children: [
    {
      index: true, // Makes Dashboard the default element for "/"
      element: <Dashboard />,
    },
  ],
}

export const notFoundRoute: RouteObject = {
  path: '*',
  element: <NotFoundPage />,
}
