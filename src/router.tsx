import { createBrowserRouter } from "react-router-dom"

import ShopPage from "./pages/ShopPage"
import NotFound from "./pages/NotFound"
import CartPage from "./pages/CartPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopPage />,
  },

  { path: "cart", element: <CartPage /> },

  {
    path: "*",
    element: <NotFound />,
  },
])

export default router
