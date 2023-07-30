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

import { useCallback } from "react"
import { ChevronsRight } from "lucide-react"

import { router } from "@/main"
import { Button } from "@/ui/button"
import { Card, CardContent, CardHeader } from "@/ui/card"
import { Input } from "@/ui/input"
import { Label } from "@/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/select"

import type { FeedType } from "@etherna/sdk-js/clients"

const LAST_TOPIC_KEY = "last-topic"
const LAST_OWNER_KEY = "last-owner"
const LAST_TYPE_KEY = "last-type"

export default function Page() {
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const topic = formData.get("topic") as string
    const owner = formData.get("owner") as string
    const type = formData.get("type") as FeedType

    router.navigate({
      to: "/$owner/$topic",
      params: {
        owner: owner.replace("0x", ""),
        topic: encodeURIComponent(topic),
      },
      search: {
        type,
      },
    })
  }, [])

  return (
    <Card className="m-auto w-full max-w-md">
      <CardHeader className="pb-0" />
      <CardContent>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="topic">Topic name</Label>
            <Input
              id="topic"
              name="topic"
              placeholder="eg: MyWebsite"
              defaultValue={localStorage.getItem(LAST_TOPIC_KEY) || ""}
              onChange={e => localStorage.setItem(LAST_TOPIC_KEY, e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="owner">Owner address</Label>
            <Input
              id="owner"
              name="owner"
              placeholder="eg: 0x47db23206247C6dfc98519dc1be33A312ef761eC"
              pattern="^0x[a-fA-F0-9]{40}$"
              defaultValue={localStorage.getItem(LAST_OWNER_KEY) || ""}
              onChange={e => localStorage.setItem(LAST_OWNER_KEY, e.target.value)}
              required
            />
          </div>

          <div>
            <Label>Type</Label>
            <Select
              name="type"
              defaultValue={localStorage.getItem(LAST_TYPE_KEY) || "sequence"}
              onValueChange={val => localStorage.setItem(LAST_TYPE_KEY, val)}
            >
              <SelectTrigger name="type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sequence">Sequence</SelectItem>
                <SelectItem value="epoch">Epoch</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full" size="sm">
            Go
            <ChevronsRight className="ml-1 h-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
