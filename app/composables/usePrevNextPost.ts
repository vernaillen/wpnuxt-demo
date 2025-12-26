/**
 * Get previous and next post slugs for navigation.
 * WPNuxt v2 migration helper - replaces the removed usePrevNextPost composable.
 */
export async function usePrevNextPost(currentUri: string | undefined): Promise<{ prev?: string, next?: string }> {
  if (!currentUri) {
    return { prev: undefined, next: undefined }
  }

  const { data } = await usePosts()
  const posts = data.value

  if (!posts || posts.length === 0) {
    return { prev: undefined, next: undefined }
  }

  // Find the current post index
  const currentIndex = posts.findIndex(post =>
    post.uri?.replace(/^\/|\/$/g, '') === currentUri?.replace(/^\/|\/$/g, '')
  )

  if (currentIndex === -1) {
    return { prev: undefined, next: undefined }
  }

  // Get previous and next post URIs (strip leading/trailing slashes)
  const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : undefined
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : undefined

  return {
    prev: prevPost?.uri?.replace(/^\/|\/$/g, ''),
    next: nextPost?.uri?.replace(/^\/|\/$/g, '')
  }
}
