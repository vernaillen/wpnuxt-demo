import { useWPPosts } from '#imports'

const _usePostSlugs = async () => {
  const { data: allPosts } = await useWPPosts()
  if (allPosts.value) {
    return {
      slugs: allPosts.value?.map((post) => {
        if (post) return post.slug
        else return null
      })
    }
  }
  return
}
export const usePostSlugs = _usePostSlugs
