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
    from: "/$owner/$topic",
  })

  const error = data.error! as Error
  const isOwnerError = error.message.includes("owner")

  return (
    <ErrorBanner className="m-auto max-w-md" title="Incorrect feed data provided" error={error}>
      {isOwnerError && (
        <>
          <span>
            Make sure it&apos;s a 40 character hex string without the <code>0x</code> at the start
          </span>
          <span className="mt-2">
            Example: <code>47db23206247C6dfc98519dc1be33A312ef761eC</code>
          </span>
        </>
      )}
    </ErrorBanner>
  )
}
