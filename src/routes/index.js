import {Home, ProductGroup} from "../pages/public/index"

const homeRoutes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/collection',
    component: ProductGroup
  },
]

export {homeRoutes};