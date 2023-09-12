export function stringifyQuery(
  data: Record<string, string | number | boolean>
): string {
  const queryParts: string[] = []

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key]
      queryParts.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`
      )
    }
  }

  return queryParts.join("&")
}
