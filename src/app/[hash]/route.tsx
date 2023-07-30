import { BeeClient } from "@etherna/sdk-js/clients"
import { Route } from "@tanstack/router"

import Error from "./error"
import Loading from "./loading"
import { root } from "@/app"
import { getBeeUrl } from "@/lib/bee"

import type { Reference } from "@etherna/sdk-js/clients"

export const route = new Route({
  path: "$hash",
  getParentRoute: () => root,
  pendingComponent: () => <Loading />,
  errorComponent: () => <Error />,
  loader: async ctx => {
    const hash = ctx.params.hash as Reference
    const bee = new BeeClient(getBeeUrl())
    const feed = await bee.feed.parseFeedFromRootManifest(hash)
    const reader = bee.feed.makeReader(feed)
    const update = await reader.download()
    const siteUrl = bee.bzz.url(update.reference)
    window.location.href = siteUrl
  },
})
