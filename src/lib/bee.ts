export function getBeeUrl() {
  const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1"
  const beeUrl = isLocal ? "http://localhost:1633" : location.origin
  return beeUrl
}
