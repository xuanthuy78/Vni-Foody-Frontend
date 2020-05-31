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
  ProductAdminPage,
  HomeAdminPage,
} from '../containers/pages'
import ForgetPassWord from '../containers/pages/forgetPassWord/ForgetPassWord'
import RegisterPage from '../containers/pages/registerPage/RegisterPage'
import LoginPage from '../containers/pages/loginPage/LoginPage'
import ContactPage from '../containers/pages/contactpage/ContactPage'

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
    path: '/forgetPassWord',
    exact: true,
    main: () => <ForgetPassWord />,
  },
  {
    path: '/RegisterPage',
    exact: true,
    main: () => <RegisterPage />,
  },
  {
    path: '/LoginPage',
    exact: true,
    main: () => <LoginPage />,
  },
  {
    path: '/admin',
    exact: true,
    main: () => <HomeAdminPage />,
  },
  {
    path: '/admin/product',
    exact: true,
    main: () => <ProductAdminPage />,
  },
  {
    path: '/ContactPage',
    exact: true,
    main: () => <ContactPage />,
  },
];

export default routes

