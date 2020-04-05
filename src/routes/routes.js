import React from 'react'
import HomePage from '../containers/pages/homePage/HomePage'

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomePage />,
  },
]

export default routes
