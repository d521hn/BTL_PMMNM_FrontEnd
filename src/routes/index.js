import BlogDetail from "../pages/public/blogDetail/BlogDetail";
import Checkout from "../pages/public/checkout/Checkout";
import CheckoutReturn from "../pages/public/checkout/CheckoutReturn";
import { Blog, Cart, DetailProduct, Home, ProductGroup, SearchProduct } from "../pages/public/index"
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
    path: path.FILTER_PRODUCT,
    component: ProductGroup
  },
  {
    path: path.PRODUCTS,
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
  },
  {
    path: path.BLOGDETAIL,
    component: BlogDetail
  },
  {
    path: path.DETAIL_PRODUCT,
    component: DetailProduct
  },
  {
    path: path.SEARCH_PRODUCT,
    component: SearchProduct
  },
  {
    path: path.CHECKOUT_RETURN,
    component: CheckoutReturn
  }
]

const checkoutRoutes = [
  {
    path: path.CHECKOUT,
    component: Checkout
  }
]

export { homeRoutes, checkoutRoutes };