import React from "react"
import ReactDOM from "react-dom/client"
import { Router, RouterProvider } from "@tanstack/router"

import { routeTree } from "./app"

export const router = new Router({
  routeTree,
  defaultPreload: "intent",
})

declare module "@tanstack/router" {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
