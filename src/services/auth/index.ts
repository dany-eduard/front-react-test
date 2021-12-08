const ApiAuthUrl = process.env.REACT_APP_API_URL_AUTH

const CREDENTIALS = {
  agencyId: 'DQgPjq82EpDunKRGv',
  agencyKey: 'wnaurtm4FIGFV9QZ7hjTvkNfNRHKkE/w7XzbsL4sSMCdYuvVDT8JRJ3PArlbQJZpTFZIyg5oQmxUsujV0DS8TA==',
  clientId: 'https://test.destinojet.co',
}

export const getAuthToken = async (
  agencyId = CREDENTIALS.agencyId,
  agencyKey = CREDENTIALS.agencyKey,
  clientId = CREDENTIALS.clientId
) => {
  const response = await fetch(`${ApiAuthUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ agencyId, agencyKey, clientId }),
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const token = await response.json()

  return token
}
