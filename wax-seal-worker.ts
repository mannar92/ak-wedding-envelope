type AssetBinding = {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>
}

export default {
  async fetch(request: Request, env: { ASSETS: AssetBinding }): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname !== '/wax_seal.png') {
      return new Response('Not Found', { status: 404 })
    }

    const assetRequest = new Request(new URL('/wax_seal.png', url.origin).toString(), request)
    const assetResponse = await env.ASSETS.fetch(assetRequest)

    if (!assetResponse.ok) {
      return new Response('Not Found', { status: 404 })
    }

    const headers = new Headers(assetResponse.headers)
    headers.set('Content-Type', 'image/png')
    headers.set('Cache-Control', 'public, max-age=31536000, immutable')

    return new Response(assetResponse.body, {
      status: 200,
      headers,
    })
  },
}
