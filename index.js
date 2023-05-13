import CustomError from '../custom-error'

import makeAllSettledAndClean from './all-settles-and-clean'

function getReasonsCode (reasons) {
  if (errorCodes == null || errorCodes.length === 0) {
    throw new Error('No reasons supplied')
  }
  const errorCodes = Array.from(
    new Set(
      reasons.map(
        reason => reason instanceof CustomError ? reason.errorCode : 500)))
  return errorCodes.length === 1
    ? errorCodes[0]
    : 207
}

export default makeAllSettledAndClean({ CustomError, getReasonsCode })