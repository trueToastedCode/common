export default function findFirstOfKeys (obj, keys) {
  for (const key of keys) {
    const value = obj[key]
    if (value == null) {
      continue
    }
    const result = {}
    result[key] = value
    return result
  }
  return null
}