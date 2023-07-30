import Spinner from "@/components/Spinner"
import { Card, CardContent, CardHeader } from "@/ui/card"

export default function Loading() {
  return (
    <Card className="m-auto max-w-md">
      <CardHeader className="pb-0" />
      <CardContent className="flex flex-col items-center space-y-5">
        <Spinner size={24} />
        <p className="font-semibold text-secondary">Loading website...</p>
      </CardContent>
    </Card>
  )
}
