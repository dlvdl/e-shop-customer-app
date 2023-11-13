import { createBrowserRouter } from "react-router-dom"

import ShopPage from "./pages/ShopPage"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopPage />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
])

export default router
