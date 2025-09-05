import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export default async function Blog() {
  let allPostsData = [];
  
  try {
    allPostsData = getSortedPostsData();
  } catch (error) {
    console.log('Posts loading error:', error);
  }

  return (
    <div className="container">
      <header className="blog-header">
        <h1>블로그</h1>
        <p>머신러닝, AI, 그리고 기술에 대한 이야기들</p>
      </header>

      {allPostsData.length > 0 ? (
        <div className="posts-list">
          {allPostsData.map(({ id, date, title, excerpt }) => (
            <article key={id} className="post-preview">
              <h2>
                <Link href={`/blog/${id}`}>
                  {title}
                </Link>
              </h2>
              <p className="date">{date}</p>
              <p className="excerpt">{excerpt}</p>
              <Link href={`/blog/${id}`} className="read-more">
                더 읽기 →
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="no-posts">
          <p>아직 작성된 글이 없습니다.</p>
          <p>곧 흥미로운 콘텐츠로 찾아뵙겠습니다!</p>
        </div>
      )}
    </div>
  );
}
