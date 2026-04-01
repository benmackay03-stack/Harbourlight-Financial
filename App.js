const App = () => {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#1a202c', lineHeight: '1.6' }}>
      {/* Navigation */}
      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', backgroundColor: '#fff' }}>
        <div style={{ fontWeight: 'bold', fontSize: '22px', color: '#2c5282' }}>Harbour Light Financial</div>
        <div style={{ fontSize: '14px', color: '#718096' }}>Calgary, AB</div>
      </nav>

      {/* Hero Section */}
      <header style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#f8fafc' }}>
        <h1 style={{ fontSize: '42px', color: '#1a365d', marginBottom: '20px', letterSpacing: '-0.02em' }}>Advice-Only Financial Planning</h1>
        <p style={{ fontSize: '19px', maxWidth: '700px', margin: '0 auto', color: '#4a5568' }}>
          Purely objective guidance for Calgarians. No investment products, no commissions, and no hidden fees. Just a clear roadmap for your money.
        </p>
      </header>

      {/* The "Advice-Only" Value Prop */}
      <section style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ color: '#2c5282', marginBottom: '20px' }}>Why Advice-Only?</h2>
        <p style={{ color: '#4a5568', fontSize: '17px', marginBottom: '20px' }}>
          As an <strong>advice-only</strong> planner, I don't sell mutual funds or insurance. I work exclusively for you. You pay for expertise and a conflict-free plan designed to build your financial future, not someone else's commission.
        </p>
      </section>

      {/* Pricing Card */}
      <section id="pricing" style={{ padding: '40px 20px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px', maxWidth: '450px', width: '100%', textAlign: 'center', backgroundColor: '#fff', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
          <span style={{ backgroundColor: '#ebf8ff', color: '#2b6cb0', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>THE PLAN</span>
          <h2 style={{ fontSize: '28px', color: '#1a365d', marginTop: '15px' }}>Financial Clarity Plan</h2>
          <div style={{ fontSize: '52px', fontWeight: 'bold', margin: '20px 0', color: '#2d3748' }}>$125<span style={{ fontSize: '20px', fontWeight: 'normal', color: '#718096' }}> / mo</span></div>
          <p style={{ color: '#718096', marginBottom: '30px' }}>6 monthly payments ($750 total)</p>
          
          <div style={{ textAlign: 'left', marginBottom: '40px', fontSize: '16px', color: '#4a5568' }}>
            <p style={{ marginBottom: '10px' }}>✓ <strong>Conflict-Free:</strong> No products or commissions</p>
            <p style={{ marginBottom: '10px' }}>✓ <strong>Comprehensive:</strong> Cash flow, debt, and retirement</p>
            <p style={{ marginBottom: '10px' }}>✓ <strong>Actionable:</strong> A step-by-step written roadmap</p>
          </div>

          {/* Replace this with your Calendly link */}
          <a href="https://calendly.com/your-link" style={{ display: 'block', backgroundColor: '#2c5282', color: 'white', padding: '18px', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', fontSize: '18px' }}>
            Book Your Free Intro
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#1a365d', color: '#bee3f8', marginTop: '60px' }}>
        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Harbour Light Financial</p>
        <p style={{ fontSize: '14px', opacity: '0.8' }}>Providing intentional financial advice to the Calgary community.</p>
        <p style={{ fontSize: '11px', marginTop: '20px', opacity: '0.6' }}>Originally from PEI | Proudly based in Calgary, AB</p>
        <p style={{ fontSize: '11px', marginTop: '5px', opacity: '0.6' }}>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
