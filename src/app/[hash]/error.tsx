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
