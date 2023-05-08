function renameProperty (obj, oldName, newName) {
  const value = obj[oldName]
  delete obj[oldName]
  obj[newName] = value
  return obj
}

function copyRenameProperty (obj, oldName, newName) {
  return renameProperty({ ...obj }, oldName, newName)
}

const _renameProperty = Object.freeze({ copyRenameProperty, renameProperty })

export default _renameProperty
export { copyRenameProperty, renameProperty }