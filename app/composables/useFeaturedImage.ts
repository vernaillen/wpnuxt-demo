export function useFeaturedImage(post: { featuredImage?: { node?: { sourceUrl?: string } } } | undefined): string | undefined {
  const imageUrl = post?.featuredImage?.node?.sourceUrl
  if (imageUrl && imageUrl.startsWith(useWPUri().url)) {
    return imageUrl.replace(useWPUri().url, '')
  }
  return imageUrl
}
