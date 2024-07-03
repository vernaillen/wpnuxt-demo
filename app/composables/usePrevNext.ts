const _usePrevNext = async (currentPostSlug) => {
  const allPosts = await usePostSlugs()
  if (!allPosts) return { prev: null, next: null }
  const currentIndex: number = allPosts.slugs.findIndex((slug: string) => slug === currentPostSlug)
  const nextPost = currentIndex > 0 ? allPosts.slugs[currentIndex - 1] : null
  const prevPost = allPosts.slugs.length > (currentIndex + 1) ? allPosts.slugs[currentIndex + 1] : null

  return {
    prev: prevPost ? prevPost : null,
    next: nextPost ? nextPost : null
  }
}
export const usePrevNext = _usePrevNext
