export default function findFirstOfKeys (obj, keys) {
  for (const key of keys) {
    if (obj[key] == null) {
      continue
    }
    const result = {}
    result[key] = value
    return result
  }
  return null
}