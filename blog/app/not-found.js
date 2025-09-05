export default function NotFound() {
  return (
    <div className="container" style={{
      textAlign: 'center',
      padding: '4rem 2rem',
      minHeight: '50vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: '#666' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>페이지를 찾을 수 없습니다</h2>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a 
          href="/" 
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '500'
          }}
        >
          홈으로 돌아가기
        </a>
        <a 
          href="/blog" 
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'transparent',
            color: '#007bff',
            textDecoration: 'none',
            borderRadius: '6px',
            border: '1px solid #007bff',
            fontWeight: '500'
          }}
        >
          블로그 보러가기
        </a>
      </div>
    </div>
  );
}
