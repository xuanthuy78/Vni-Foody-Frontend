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
  PayShoppingPage,
  FinishShoppingPage,
 
} from '../containers/pages'
import ProducDetailPage from '../containers/pages/productdetailPage/ProducDetailPage'
import CartPage from '../containers/pages/cartPage/CartPage'



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
  {
    path: '/pay-shopping',
    exact: true,
    main: () => <PayShoppingPage />,
  },
  {
    path: '/finish',
    exact: true,
    main: () => <FinishShoppingPage />,
  },
  {
    path: '/productdetail',
    exact: true,
    main: () => <ProducDetailPage/>,
  },
  {
    path: '/cart',
    exact: true,
    main: () => <CartPage/>,
  }
]

export default routes
