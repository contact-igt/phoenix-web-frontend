export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a0a0a', color: '#fff' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to Phoenix Fitness</h1>
        <p style={{ color: '#a0a0a0' }}>The new homepage is being built. Check out our <a href="/services" style={{ color: '#f13a05', textDecoration: 'underline' }}>Services</a> or <a href="/pricing" style={{ color: '#f13a05', textDecoration: 'underline' }}>Pricing</a> pages!</p>
      </div>
    </main>
  );
}
