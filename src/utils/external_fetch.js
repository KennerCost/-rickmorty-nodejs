async function externalFetch(url) {
  try {
    return await fetch(url, { signal: AbortSignal.timeout(8000) });
  } catch (error) {
    const apiError = new Error("External API unavailable.");
    apiError.status = 503;
    apiError.cause = error;
    throw apiError;
  }
}

module.exports = { externalFetch };
