export default function makeAllSettledAndClean ({ CustomError, getReasonsCode }) {
  return async function allSettledAndClean (functions, cleanFunctions = null) {
    if (cleanFunctions != null && functions.length !== cleanFunctions.length) {
      throw new Error(`Length of functions doesn't match length of cleanFunctions`)
    }
    const results = await Promise.allSettled(functions)
    const isSomeRejected = results.some(
      result => result.status === 'rejected')
    if (!isSomeRejected) {
      return results.map(result => result.value)
    }
    const reasons = []
    const chosenCleanFunctions = []
    results.forEach((result, i) => {
      if (result.status === 'rejected') {
        reasons.push(result.reason)
        return
      }
      if (cleanFunctions == null) {
        return
      }
      chosenCleanFunctions.push(cleanFunctions[i])
    })
    if (cleanFunctions != null) {
      const cleanResults = await Promise.allSettled(
        chosenCleanFunctions.map(f => f()))
      for (const cleanResult of cleanResults) {
        if (cleanResult.status === 'fulfilled') {
          continue
        }
        reasons.push(cleanResult.reason)
      }
    }
    throw new CustomError(
      reasons.map(reason => reason.message).join('; '),
      getReasonsCode(reasons))
  }
}