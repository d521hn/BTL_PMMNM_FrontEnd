import { Blog, Cart, Home, ProductGroup } from "../pages/public/index"
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
  }
]

export { homeRoutes };