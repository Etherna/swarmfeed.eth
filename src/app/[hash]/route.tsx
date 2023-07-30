/*
 *  Copyright 2021-present Etherna Sagl
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

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
