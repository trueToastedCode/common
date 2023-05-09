export default function makeDefaultController ({ ucFunc, statusCode = 200 }) {
  return async function defaultController (info) {
    try {
      const result = await ucFunc(info)
      return result == null
        ? { statusCode }
        : { statusCode, body: result }
    } catch (e) {
      return {
        statusCode: 500,
        error: e.message
      }
    }
  }
}