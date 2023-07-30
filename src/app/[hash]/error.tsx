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

import { useMatch } from "@tanstack/router"

import { ErrorBanner } from "@/components/ErrorBanner"

export default function Error() {
  const data = useMatch({
    from: "/$hash",
  })

  const error = data.error! as Error

  return (
    <ErrorBanner className="m-auto max-w-md" title="Feed loading error" error={error}>
      <span>Make sure the feed provided is valid, or whether the feed has at least 1 udpate.</span>
    </ErrorBanner>
  )
}
