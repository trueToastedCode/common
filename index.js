export default function renameProperty (obj, oldName, newName) {
  const value = obj[oldName]
  delete obj[oldName]
  obj[newName] = value
  return obj
}