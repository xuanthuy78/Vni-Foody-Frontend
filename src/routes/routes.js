import React from 'react'
import { HomePage, ProductPage, NewsPage } from '../containers/pages'

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: '/product',
    exact: true,
    main: () => <ProductPage />,
  },
  {
    path: '/news',
    exact: true,
    main: () => <NewsPage />,
  },
]

export default routes
