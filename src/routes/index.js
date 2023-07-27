import { Home, ProductGroup } from "../pages/public/index"
import path from "../ultils/path"

const homeRoutes = [
  {
    path: path.HOME,
    component: Home
  },
  {
    path: path.COLLECTION,
    component: ProductGroup
  },
]

export { homeRoutes };