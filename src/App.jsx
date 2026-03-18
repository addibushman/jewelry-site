const featuredProducts = [
    {
      id: 1,
      category: 'Bundle',
      name: 'Coastal Layering Set',
      price: '$118',
      description:
        'A simple everyday stack with a delicate necklace, bracelet, and earrings designed to be worn together.',
      image:
        'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80',
      alt: 'Woman wearing layered gold jewelry',
    },
    {
      id: 2,
      category: 'Ring',
      name: 'Sol Signet Ring',
      price: '$46',
      description:
        'A clean gold ring with a softly rounded face that feels classic, polished, and easy to style.',
      image:
        'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=900&q=80',
      alt: 'Close-up of ring worn on hand',
    },
    {
      id: 3,
      category: 'Necklace',
      name: 'Tidal Chain Necklace',
      price: '$58',
      description:
        'A lightweight layering chain that sits neatly at the collarbone for an understated everyday look.',
      image:
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
      alt: 'Woman wearing a gold necklace',
    },
    {
      id: 4,
      category: 'Earrings',
      name: 'Luna Drop Earrings',
      price: '$52',
      description:
        'Elegant drop earrings with subtle movement, designed to feel refined without being too formal.',
      image:
        'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=900&q=80',
      alt: 'Woman wearing earrings',
    },
    {
      id: 5,
      category: 'Bracelet',
      name: 'Shoreline Cuff',
      price: '$49',
      description:
        'A slim bracelet with a minimal silhouette that works beautifully on its own or stacked with others.',
      image:
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=80',
      alt: 'Bracelet worn on wrist',
    },
  ]
  
  const details = [
    {
      title: 'Materials',
      text: 'Our pieces are designed with a minimal aesthetic and made to feel elevated, wearable, and easy to pair across collections.',
    },
    {
      title: 'Sizing',
      text: 'Showing jewelry on the body helps customers understand scale, drop length, and layering proportions before purchasing.',
    },
    {
      title: 'Shipping',
      text: 'Orders are processed quickly and packaged simply, with a presentation style that matches the clean visual identity of the brand.',
    },
    {
      title: 'Care',
      text: 'To maintain shine, store pieces in a dry place and avoid unnecessary contact with lotions, water, and perfumes.',
    },
  ]
  
  const faqs = [
    {
      q: 'Why is the jewelry shown on a model?',
      a: 'Because jewelry scale is much easier to understand when it is worn on the body. Customers can better judge size, length, and overall styling.',
    },
    {
      q: 'What makes this site information-heavy?',
      a: 'Beyond product listings, the website includes product descriptions, styling guidance, material notes, shipping details, care instructions, and common questions.',
    },
    {
      q: 'Is there a featured bundle?',
      a: 'Yes. The bundle section highlights a coordinated set for shoppers who want an easy layered look rather than buying each piece individually.',
    },
  ]
  
  function App() {
    return (
      <div className="site-shell">
        <header className="topbar">
          <div className="brand">Luna Atelier</div>
          <nav className="nav">
            <a href="#shop">Shop</a>
            <a href="#story">About</a>
            <a href="#details">Details</a>
            <a href="#faq">FAQ</a>
          </nav>
        </header>
  
        <main>
          <section className="hero">
            <div className="hero-copy">
              <p className="eyebrow">Everyday Fine Jewelry</p>
              <h1>Simple pieces designed to look polished, wearable, and timeless.</h1>
              <p className="hero-text">
                A minimal jewelry collection inspired by clean styling and coastal softness.
                Each piece is shown on the body so customers can understand fit, scale, and layering more clearly.
              </p>
              <div className="hero-actions">
                <a className="btn btn-dark" href="#shop">Shop Collection</a>
                <a className="btn btn-light" href="#story">Our Approach</a>
              </div>
            </div>
  
            <div className="hero-image-wrap">
              <img
                className="hero-image"
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80"
                alt="Model wearing layered gold jewelry"
              />
            </div>
          </section>
  
          <section className="intro-strip" id="story">
            <div>
              <p className="section-label">The Brand</p>
              <h2>Professional, minimal, and easy to browse.</h2>
            </div>
            <p>
              This website is designed to feel clean and elevated, similar to modern jewelry brands
              that rely on soft imagery, whitespace, and simple typography. The focus is on helping
              shoppers quickly understand each product while still giving enough detail to make the site feel substantial.
            </p>
          </section>
  
          <section className="products-section" id="shop">
            <div className="section-header">
              <p className="section-label">Featured Collection</p>
              <h2>Bundle, ring, necklace, earrings, and bracelet.</h2>
            </div>
  
            <div className="product-grid">
              {featuredProducts.map((item) => (
                <article className="product-card" key={item.id}>
                  <div className="product-image-wrap">
                    <img src={item.image} alt={item.alt} className="product-image" />
                  </div>
                  <div className="product-info">
                    <div className="product-meta">
                      <span>{item.category}</span>
                      <span>{item.price}</span>
                    </div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <button className="text-link">View Piece</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
  
          <section className="bundle-highlight">
            <div className="bundle-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80"
                alt="Jewelry bundle displayed together"
                className="bundle-image"
              />
            </div>
            <div className="bundle-copy">
              <p className="section-label">Bundle Option</p>
              <h2>Create the layered look all at once.</h2>
              <p>
                The Coastal Layering Set brings together our most versatile pieces into one bundle.
                It is ideal for customers who want a styled, cohesive jewelry look without needing to mix and match on their own.
              </p>
              <ul className="bundle-list">
                <li>Includes necklace, bracelet, and earrings</li>
                <li>Designed for a polished everyday look</li>
                <li>Better visual scale through on-body photography</li>
              </ul>
              <a className="btn btn-dark" href="#shop">Explore the Bundle</a>
            </div>
          </section>
  
          <section className="details-section" id="details">
            <div className="section-header">
              <p className="section-label">More Information</p>
              <h2>A simple site can still be content-rich.</h2>
            </div>
  
            <div className="details-grid">
              {details.map((item) => (
                <div className="detail-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>
  
          <section className="editorial">
            <div className="editorial-copy">
              <p className="section-label">Why It Works</p>
              <h2>Clean visuals with enough information to guide the shopper.</h2>
              <p>
                Minimal brands often feel premium because they keep the layout calm and intentional.
                This design uses large imagery, soft neutral colors, generous spacing, and concise text
                to keep the experience professional while still meeting the needs of an information-heavy website.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1200&q=80"
              alt="Woman wearing delicate jewelry"
              className="editorial-image"
            />
          </section>
  
          <section className="faq-section" id="faq">
            <div className="section-header">
              <p className="section-label">FAQ</p>
              <h2>Common questions.</h2>
            </div>
            <div className="faq-list">
              {faqs.map((item) => (
                <div className="faq-item" key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
  
        <footer className="footer">
          <div>
            <h3>Luna Atelier</h3>
            <p>Minimal jewelry for everyday wear.</p>
          </div>
          <div className="footer-links">
            <a href="#shop">Shop</a>
            <a href="#details">Details</a>
            <a href="#faq">FAQ</a>
          </div>
        </footer>
      </div>
    )
  }
  
  export default App