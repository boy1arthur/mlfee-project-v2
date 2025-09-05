import { getSortedPostsData } from '../lib/posts'

export default function sitemap() {
  const baseUrl = 'https://mlfee.com'
  
  // 정적 페이지들
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // 블로그 포스트들
  let blogPosts = []
  try {
    const posts = getSortedPostsData()
    blogPosts = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.id}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  } catch (error) {
    console.log('Error generating sitemap for blog posts:', error)
  }

  return [...staticPages, ...blogPosts]
}
