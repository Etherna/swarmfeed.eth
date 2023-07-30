import { RootRoute, Route } from "@tanstack/router"

import { route as ownerTopicRoute } from "./[hash]/[topic]/route"
import { route as hashRoute } from "./[hash]/route"
import Layout from "./layout"
import HomePage from "./page"

export const root = new RootRoute({
  component: Layout,
})

const route = new Route({
  path: "/",
  component: () => <HomePage />,
  getParentRoute: () => root,
})

export const routeTree = root.addChildren([route, hashRoute, ownerTopicRoute])
