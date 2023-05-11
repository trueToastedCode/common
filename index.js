export default function findFirstOfKeys (obj, keys) {
  for (const key of keys) {
    if (obj[key] == null) {
      continue
    }
    return { key, value }
  }
  return null
}