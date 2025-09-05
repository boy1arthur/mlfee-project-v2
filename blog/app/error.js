'use client';

export default function Error({ error, reset }) {
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
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#dc3545' }}>오류 발생</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>문제가 발생했습니다</h2>
      <p style={{ color: '#666', marginBottom: '2rem', maxWidth: '500px' }}>
        페이지를 불러오는 중에 오류가 발생했습니다. 
        잠시 후 다시 시도해주시거나 새로고침해주세요.
      </p>
      {error && (
        <details style={{ marginBottom: '2rem', textAlign: 'left' }}>
          <summary style={{ cursor: 'pointer', color: '#666' }}>
            오류 상세 정보 (개발용)
          </summary>
          <pre style={{ 
            background: '#f8f9fa', 
            padding: '1rem', 
            borderRadius: '4px', 
            overflow: 'auto',
            fontSize: '0.8rem',
            color: '#dc3545'
          }}>
            {error.message}
          </pre>
        </details>
      )}
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button 
          onClick={() => reset()}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: '500',
            cursor: 'pointer'
          }}
        >
          다시 시도
        </button>
        <a 
          href="/"
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
          홈으로 돌아가기
        </a>
      </div>
    </div>
  );
}
