import { getAllPostIds, getPostData } from '../../../lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function Post({ params }) {
  const postData = await getPostData(params.slug);

  // 포스트가 존재하지 않으면 404 페이지로 리다이렉트
  if (!postData) {
    notFound();
  }

  return (
    <article className="post">
      <div className="post-navigation">
        <Link href="/blog" className="back-link">
          ← 블로그로 돌아가기
        </Link>
      </div>
      
      <header className="post-header">
        <h1>{postData.title}</h1>
        <div className="post-meta">
          <p className="date">{postData.date}</p>
          {postData.tags && (
            <div className="tags">
              {postData.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <div 
        className="post-content" 
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
      />

      <footer className="post-footer">
        <Link href="/blog" className="back-link">
          ← 더 많은 글 보기
        </Link>
      </footer>
    </article>
  );
}

// 메타데이터 생성
export async function generateMetadata({ params }) {
  const postData = await getPostData(params.slug);
  
  if (!postData) {
    return {
      title: 'Post Not Found - ML Fee',
    };
  }

  return {
    title: `${postData.title} - ML Fee`,
    description: postData.excerpt || postData.title,
  };
}
