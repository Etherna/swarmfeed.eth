import { AlertTriangleIcon } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/ui/card"

import type { PropsWithChildren } from "react"

type ErrorBannerProps = PropsWithChildren<{
  className?: string
  title?: string
  error: Error
}>

export function ErrorBanner({ className, children, title, error }: ErrorBannerProps) {
  return (
    <Card className={className}>
      <CardHeader className="pb-0" />
      <CardContent className="flex flex-col items-center space-y-5 text-red-600 dark:text-red-300">
        <AlertTriangleIcon className="h-8 w-8" />
        {title && <h1 className="text-2xl font-bold tracking-tight">{title}</h1>}
        <div className="flex flex-col text-center text-foreground">
          <span className="mx-auto border-b border-current font-semibold">{error.message}</span>
          {children && <div className="mt-4">{children}</div>}
        </div>
      </CardContent>
    </Card>
  )
}
