import { useParams } from "@tanstack/router"

export default function Page() {
  const params = useParams({ from: "/$hash" })

  return <div>Hash: {params.hash}</div>
}
