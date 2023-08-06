import { Blog, Cart, Home, ProductGroup } from "../pages/public/index"
import Login from "../pages/public/login/Login";
import Register from "../pages/public/register/Register";
import path from "../ultils/path"

const homeRoutes = [
  {
    path: path.HOME,
    component: Home
  },
  {
    path: path.COLLECTIONS,
    component: ProductGroup
  },
  {
    path: path.CART,
    component: Cart
  },
  {
    path: path.BLOG,
    component: Blog
  },
  {
    path: path.REGISTER,
    component: Register
  },
  {
    path: path.LOGIN,
    component: Login
  }
]

export { homeRoutes };