import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import router from "./router.tsx"
import "./index.css"
import { store } from "./app/store.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <App />
    </Provider>
  </React.StrictMode>
)
