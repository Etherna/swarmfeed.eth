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
