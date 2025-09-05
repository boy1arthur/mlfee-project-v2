export default function PostLoading() {
  return (
    <article className="post">
      <div className="post-navigation">
        <div style={{ 
          width: '150px', 
          height: '1.2rem', 
          background: '#f0f0f0', 
          borderRadius: '4px',
          animation: 'pulse 1.5s infinite'
        }}></div>
      </div>
      
      <header className="post-header">
        <div style={{ 
          width: '70%', 
          height: '3rem', 
          background: '#f0f0f0', 
          borderRadius: '4px', 
          margin: '0 auto 1rem',
          animation: 'pulse 1.5s infinite'
        }}></div>
        <div style={{ 
          width: '200px', 
          height: '1rem', 
          background: '#e0e0e0', 
          borderRadius: '4px', 
          margin: '0 auto',
          animation: 'pulse 1.5s infinite'
        }}></div>
      </header>

      <div className="post-content">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} style={{
            width: i % 2 === 0 ? '90%' : '100%',
            height: '1.2rem',
            background: '#f0f0f0',
            borderRadius: '4px',
            marginBottom: '1rem',
            animation: `pulse 1.5s infinite ${i * 0.1}s`
          }}></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </article>
  );
}
