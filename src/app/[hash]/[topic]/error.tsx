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
