

export const OK = (message) => ({
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  body: typeof message === 'string' ? message: JSON.stringify(message)
});
