import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export default function Home() {
  const allPostsData = getSortedPostsData();
  const recentPosts = allPostsData.slice(0, 3); // 최신 3개 글만 표시

  return (
    <div className="container">
      <section className="hero">
        <h1>ML Fee에 오신 것을 환영합니다</h1>
        <p>머신러닝과 AI에 관한 깊이 있는 인사이트를 공유합니다.</p>
        <Link href="/blog" className="cta-button">
          블로그 보러가기
        </Link>
      </section>

      <section className="recent-posts">
        <h2>최신 글</h2>
        {recentPosts.length > 0 ? (
          <div className="posts-grid">
            {recentPosts.map(({ id, date, title, excerpt }) => (
              <article key={id} className="post-card">
                <h3>
                  <Link href={`/blog/${id}`}>
                    {title}
                  </Link>
                </h3>
                <p className="date">{date}</p>
                <p className="excerpt">{excerpt}</p>
              </article>
            ))}
          </div>
        ) : (
          <p>아직 작성된 글이 없습니다. 곧 업데이트될 예정입니다!</p>
        )}
        
        {recentPosts.length > 0 && (
          <Link href="/blog" className="view-all">
            모든 글 보기 →
          </Link>
        )}
      </section>
    </div>
  );
}
