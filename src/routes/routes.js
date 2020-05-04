import React from 'react'
import {
  HomePage,
  ProductPage,
  NewsPage,
  IntroducePage,
  NewsCategoryPages,
  NewsDetailPage,
  ProductCategoryPage,
  IntroduceDetailPage,
  ShoppingCartPage,
} from '../containers/pages'

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
    path: '/product-category',
    exact: true,
    main: () => <ProductCategoryPage />,
  },
  {
    path: '/news',
    exact: true,
    main: () => <NewsPage />,
  },
  {
    path: '/news-category',
    exact: true,
    main: () => <NewsCategoryPages />,
  },
  {
    path: '/news-detail',
    exact: true,
    main: () => <NewsDetailPage />,
  },
  {
    path: '/introduce',
    exact: true,
    main: () => <IntroducePage />,
  },
  {
    path: '/introduce-detail/:title',
    exact: true,
    main: ({ match, history }) => (
      <IntroduceDetailPage match={match} history={history} />
    ),
  },
  {
    path: '/shopping-cart',
    exact: true,
    main: () => <ShoppingCartPage />,
  },
]

export default routes
