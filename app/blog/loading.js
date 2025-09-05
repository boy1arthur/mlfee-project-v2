export default function BlogLoading() {
  return (
    <div className="container">
      <div className="blog-header">
        <h1>블로그</h1>
        <p>머신러닝, AI, 그리고 기술에 대한 이야기들</p>
      </div>

      <div className="posts-list">
        {[1, 2, 3].map((i) => (
          <article key={i} className="post-preview" style={{
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'loading 1.5s infinite'
          }}>
            <div style={{ height: '2rem', background: 'rgba(255,255,255,0.8)', borderRadius: '4px', marginBottom: '1rem' }}></div>
            <div style={{ height: '1rem', background: 'rgba(255,255,255,0.6)', borderRadius: '4px', marginBottom: '0.5rem', width: '60%' }}></div>
            <div style={{ height: '3rem', background: 'rgba(255,255,255,0.6)', borderRadius: '4px' }}></div>
          </article>
        ))}
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
