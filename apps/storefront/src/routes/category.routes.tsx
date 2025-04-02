import CategoryList from '@components/category/CategoryList'
import { RouteObject } from 'react-router-dom'

export const categoryRoutes: RouteObject[] = [
  {
    path: '/shop/:catalogId/categories',
    element: <CategoryList />,
  },
  {
    path: '/shop/:catalogId/categories/:categoryId',
    element: <CategoryList />,
  },
]
