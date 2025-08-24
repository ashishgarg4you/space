export default function HeroMid() {
  return (
    <section
      style={{
        background: '#111',
        color: 'white',
        textAlign: 'center',
        padding: '5rem 2rem',
      }}
    >
      <h2
        style={{
          fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
          marginBottom: '1rem',
          fontWeight: '800',
        }}
      >
        One Stop Custom Printing Solution
      </h2>
      <p
        style={{
          fontSize: '1.2rem',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.6',
          color: '#ddd',
        }}
      >
        From personalized t-shirts and caps to corporate gifts and promotional
        products, we bring your ideas to life with high-quality printing and unmatched style.
      </p>
    </section>
  );
}
