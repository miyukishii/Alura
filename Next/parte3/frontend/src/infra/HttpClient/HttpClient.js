// Arquitetura Hexagonal

export async function HttpClient(fetchURL, fetchOptions) {
    return await fetch(fetchURL, {
        ...fetchOptions,
        headers: {
            'Content-Type': 'application/json',
            ... fetchOptions.headers,
        },
        body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : null
    })
    .then(async (response) => {
      return {
        ok: response.ok,
        body: await response.json(),
      }
    })
}