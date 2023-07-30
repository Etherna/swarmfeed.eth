import { BeeClient } from "@etherna/sdk-js/clients"
import { Route } from "@tanstack/router"

import Error from "./error"
import { root } from "@/app"
import { getBeeUrl } from "@/lib/bee"
import { router } from "@/main"

import type { FeedType } from "@etherna/sdk-js/clients"

export const route = new Route({
  path: "$owner/$topic",
  errorComponent: () => <Error />,
  getParentRoute: () => root,
  validateSearch: search => {
    let type = search.type as string | undefined
    type = type?.toLowerCase()
    type = type === "epoch" ? type : "sequence"

    return {
      type: type as FeedType,
    }
  },
  loader: async ctx => {
    const topic = decodeURIComponent(ctx.params.topic)
    const owner = `0x${ctx.params.owner}` as const
    const type = ctx.search.type

    if (!/^0x[a-zA-Z0-9]{40}$/.test(owner)) {
      throw new TypeError("Invalid owner address")
    }

    const bee = new BeeClient(getBeeUrl())
    const feed = bee.feed.makeFeed(topic, owner, type)
    const rootManifest = await bee.feed.makeRootManifest(feed)

    router.navigate({
      to: "/$hash",
      params: {
        hash: rootManifest.reference,
      },
    })
  },
})
