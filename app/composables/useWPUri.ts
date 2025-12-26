export function useWPUri() {
  const wordpressUrl = useRuntimeConfig().public.wordpressUrl as string
  return {
    url: wordpressUrl,
    admin: `${wordpressUrl}/wp-admin`
  }
}
