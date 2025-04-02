import { Checkout } from '@components/checkout/Checkout'
import OrderConfirmation from '@components/checkout/OrderConfirmation'
import { RouteObject } from 'react-router-dom'

export const checkoutLayoutRoutes: RouteObject[] = [
  {
    path: '/cart',
    element: <Checkout />,
  },
]

export const checkoutStandaloneRoutes: RouteObject[] = [
  {
    path: '/order-confirmation',
    element: <OrderConfirmation />,
  },
]
