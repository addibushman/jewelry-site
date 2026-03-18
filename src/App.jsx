import { useMemo, useState } from 'react'

const categories = [
  {
    id: 'necklaces',
    name: 'Necklaces',
    cover:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    description: 'Layering chains, pendants, and simple everyday necklaces.',
  },
  {
    id: 'earrings',
    name: 'Earrings',
    cover:
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=80',
    description: 'Minimal hoops and polished daily pairs.',
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    cover:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
    description: 'Slim bracelets and refined stacking styles.',
  },
  {
    id: 'rings',
    name: 'Rings',
    cover:
      'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=1200&q=80',
    description: 'Soft signets and clean stacking rings.',
  },
  {
    id: 'bundles',
    name: 'Bundles',
    cover:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80',
    description: 'Pre-styled jewelry sets for easy layering.',
  },
]

const products = [
  {
    id: 'tidal-chain',
    category: 'necklaces',
    name: 'Tidal Chain Necklace',
    price: 58,
    badge: 'Best Seller',
    style: 'Minimal',
    metal: 'Gold',
    shortDescription: 'A polished layering chain designed to sit neatly at the collarbone.',
    description:
      'The Tidal Chain Necklace is a lightweight everyday piece made for clean layering. The on-body image helps customers understand the exact length and drop.',
    materials: 'Gold-tone finish, slim chain profile, lobster clasp closure.',
    size: 'Length: 16" + 2" extender',
    shipping: 'Ships in 2–4 business days.',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'coast-pendant',
    category: 'necklaces',
    name: 'Coast Pendant',
    price: 62,
    badge: 'New',
    style: 'Statement',
    metal: 'Gold',
    shortDescription: 'A simple pendant necklace with a soft, elevated look.',
    description:
      'This pendant style gives the collection a slightly more statement feel while still staying minimal.',
    materials: 'Gold-tone finish with polished pendant.',
    size: 'Length: 18" + 2" extender',
    shipping: 'Ships in 2–4 business days.',
    images: [
      'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'luna-drops',
    category: 'earrings',
    name: 'Luna Drop Earrings',
    price: 52,
    badge: 'Popular',
    style: 'Minimal',
    metal: 'Gold',
    shortDescription: 'Elegant earrings with subtle movement and a refined shape.',
    description:
      'The Luna Drop Earrings are meant to feel polished without being overly formal.',
    materials: 'Gold-tone finish, lightweight drop silhouette.',
    size: 'Drop length: 1.4"',
    shipping: 'Ships in 2–4 business days.',
    images: [
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'shore-hoops',
    category: 'earrings',
    name: 'Shore Hoops',
    price: 48,
    badge: 'Everyday',
    style: 'Minimal',
    metal: 'Gold',
    shortDescription: 'Small polished hoops for an easy daily look.',
    description:
      'These hoops are a simple everyday option that pair easily with necklaces and bracelets.',
    materials: 'Gold-tone finish, hinge closure.',
    size: 'Diameter: 0.8"',
    shipping: 'Ships in 2–4 business days.',
    images: [
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'shoreline-cuff',
    category: 'bracelets',
    name: 'Shoreline Cuff',
    price: 49,
    badge: 'Classic',
    style: 'Statement',
    metal: 'Gold',
    shortDescription: 'A slim, minimal cuff that works beautifully on its own or stacked.',
    description:
      'The Shoreline Cuff keeps the bracelet category clean and understated.',
    materials: 'Gold-tone finish, open cuff silhouette.',
    size: 'One size, slightly adjustable',
    shipping: 'Ships in 2–4 business days.',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'marina-chain',
    category: 'bracelets',
    name: 'Marina Chain Bracelet',
    price: 54,
    badge: 'Best Seller',
    style: 'Minimal',
    metal: 'Gold',
    shortDescription: 'A delicate chain bracelet for a soft stacked look.',
    description:
      'This bracelet is designed to pair easily with both rings and necklaces.',
    materials: 'Gold-tone finish, chain clasp closure.',
    size: 'Length: 6.5" + 1" extender',
    shipping: 'Ships in 2–4 business days.',
    images: [
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'sol-signet',
    category: 'rings',
    name: 'Sol Signet Ring',
    price: 46,
    badge: 'Best Seller',
    style: 'Minimal',
    metal: 'Gold',
    shortDescription: 'A softly rounded signet-inspired ring with a timeless feel.',
    description:
      'The Sol Signet Ring adds a polished shape to the collection.',
    materials: 'Gold-tone finish, smooth rounded face.',
    size: 'Available in sizes 6, 7, and 8',
    shipping: 'Ships in 2–4 business days.',
    images: [
      'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'coast-band',
    category: 'rings',
    name: 'Coast Band',
    price: 42,
    badge: 'Minimal',
    style: 'Minimal',
    metal: 'Gold',
    shortDescription: 'A clean everyday ring designed for stacking.',
    description:
      'This ring is simple, versatile, and easy to combine with the rest of the collection.',
    materials: 'Gold-tone finish, slim band.',
    size: 'Available in sizes 6, 7, and 8',
    shipping: 'Ships in 2–4 business days.',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'coastal-layering-set',
    category: 'bundles',
    name: 'Coastal Layering Set',
    price: 118,
    badge: 'Bundle',
    style: 'Minimal',
    metal: 'Gold',
    shortDescription: 'A necklace, bracelet, and earrings styled as one polished everyday set.',
    description:
      'The bundle option is useful for shoppers who want the layered look without building it piece by piece.',
    materials: 'Coordinated gold-tone pieces styled to work together.',
    size: 'Includes one necklace, one bracelet, and one earring pair',
    shipping: 'Ships in 2–4 business days.',
    images: [
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80',
    ],
  },
]

function Header({ onNavigateHome, onOpenCategory }) {
  return (
    <header className="header">
      <div className="announcement">Simple everyday jewelry with clean styling.</div>

      <div className="nav-shell">
        <button className="brand-button" onClick={onNavigateHome}>
          Luna Atelier
        </button>

        <nav className="nav-links">
          <button onClick={() => onOpenCategory('bundles')}>Bundles</button>
          <button onClick={() => onOpenCategory('necklaces')}>Necklaces</button>
          <button onClick={() => onOpenCategory('earrings')}>Earrings</button>
          <button onClick={() => onOpenCategory('bracelets')}>Bracelets</button>
          <button onClick={() => onOpenCategory('rings')}>Rings</button>
        </nav>

        <div className="nav-icons">
          <span>Search</span>
          <span>Account</span>
          <span>Bag</span>
        </div>
      </div>
    </header>
  )
}

function HomeView({ onOpenCategory, onOpenProduct }) {
  const featured = products.slice(0, 4)

  return (
    <>
      <section className="hero-v2">
        <div className="hero-v2-copy">
          <p className="mini-label">EVERYDAY JEWELRY</p>
          <h1>Simple pieces with a cleaner, more elevated shopping experience.</h1>
          <p>
            Minimal jewelry styled with soft imagery, clear browsing, and deeper product pages so
            each piece feels easier to shop.
          </p>

          <div className="hero-actions">
            <button className="primary-btn" onClick={() => onOpenCategory('necklaces')}>
              Shop Collection
            </button>
            <button className="secondary-btn" onClick={() => onOpenCategory('bundles')}>
              View Bundles
            </button>
          </div>
        </div>

        <div className="hero-v2-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1400&q=80"
            alt="Model wearing layered gold jewelry"
            className="hero-v2-image"
          />
        </div>
      </section>

      <section className="category-strip simple-categories">
        {categories.map((category) => (
          <article
            key={category.id}
            className="category-card simple-category-card"
            onClick={() => onOpenCategory(category.id)}
          >
            <img src={category.cover} alt={category.name} className="category-card-image" />
            <div className="category-card-copy">
              <h3>{category.name}</h3>
              <span className="shop-link">Shop {category.name}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="featured-section">
        <div className="section-top">
          <div>
            <p className="mini-label">BEST SELLERS</p>
            <h2>Clean, simple, easy to wear.</h2>
          </div>
          <button className="link-button" onClick={() => onOpenCategory('necklaces')}>
            View More
          </button>
        </div>

        <div className="product-grid-v2 product-grid-simple">
          {featured.map((product) => (
            <article
              className="product-card-v2 simple-product-card"
              key={product.id}
              onClick={() => onOpenProduct(product.id)}
            >
              <div className="product-image-frame simple-image-frame">
                <img src={product.images[0]} alt={product.name} className="product-card-image" />
                <button
                  className="wishlist-button"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Save item"
                >
                  ♡
                </button>
                {product.badge && <span className="product-badge simple-badge">{product.badge}</span>}
              </div>

              <div className="product-card-copy simple-product-copy">
                <h3>{product.name}</h3>
                <div className="simple-price-row">
                  <span>${product.price}</span>
                </div>
                <p>{product.materials}</p>
                <span className="shop-link">View Product</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function CollectionView({ categoryId, onOpenProduct, onNavigateHome }) {
  const category = categories.find((item) => item.id === categoryId)

  const [search, setSearch] = useState('')
  const [styleFilter, setStyleFilter] = useState('All')
  const [metalFilter, setMetalFilter] = useState('All')
  const [priceFilter, setPriceFilter] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  const filtered = useMemo(() => {
    let result = products.filter((product) => product.category === categoryId)

    if (search.trim()) {
      const query = search.toLowerCase()
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.shortDescription.toLowerCase().includes(query) ||
          product.materials.toLowerCase().includes(query)
      )
    }

    if (styleFilter !== 'All') {
      result = result.filter((product) => product.style === styleFilter)
    }

    if (metalFilter !== 'All') {
      result = result.filter((product) => product.metal === metalFilter)
    }

    if (priceFilter === 'Under50') {
      result = result.filter((product) => product.price < 50)
    } else if (priceFilter === '50to75') {
      result = result.filter((product) => product.price >= 50 && product.price <= 75)
    } else if (priceFilter === 'Over75') {
      result = result.filter((product) => product.price > 75)
    }

    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price)
    } else if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name))
    }

    return result
  }, [categoryId, search, styleFilter, metalFilter, priceFilter, sortBy])

  if (!category) return null

  return (
    <section className="collection-view">
      <div className="breadcrumb">
        <button onClick={onNavigateHome}>Home</button>
        <span>/</span>
        <span>{category.name}</span>
      </div>

      <div className="collection-header simple-collection-header">
        <div>
          <p className="mini-label">COLLECTION</p>
          <h1>{category.name}</h1>
        </div>
        <div className="collection-count">{filtered.length} PRODUCTS</div>
      </div>

      <div className="collection-toolbar">
        <div className="search-box">
          <input
            type="text"
            placeholder={`Search ${category.name.toLowerCase()}...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="toolbar-controls">
          <select value={styleFilter} onChange={(e) => setStyleFilter(e.target.value)}>
            <option value="All">All Styles</option>
            <option value="Minimal">Minimal</option>
            <option value="Statement">Statement</option>
          </select>

          <select value={metalFilter} onChange={(e) => setMetalFilter(e.target.value)}>
            <option value="All">All Metals</option>
            <option value="Gold">Gold</option>
          </select>

          <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
            <option value="All">All Prices</option>
            <option value="Under50">Under $50</option>
            <option value="50to75">$50–$75</option>
            <option value="Over75">Over $75</option>
          </select>

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="featured">Sort: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>
      </div>

      <div className="active-filters">
        {search && <span className="filter-chip">Search: {search}</span>}
        {styleFilter !== 'All' && <span className="filter-chip">{styleFilter}</span>}
        {metalFilter !== 'All' && <span className="filter-chip">{metalFilter}</span>}
        {priceFilter === 'Under50' && <span className="filter-chip">Under $50</span>}
        {priceFilter === '50to75' && <span className="filter-chip">$50–$75</span>}
        {priceFilter === 'Over75' && <span className="filter-chip">Over $75</span>}
      </div>

      <div className="collection-grid simple-collection-grid full-width-grid">
        {filtered.map((product) => (
          <article
            className="collection-product-card simple-product-card"
            key={product.id}
            onClick={() => onOpenProduct(product.id)}
          >
            <div className="collection-image-wrap simple-image-frame">
              <img src={product.images[0]} alt={product.name} className="collection-image" />
              <button
                className="wishlist-button"
                onClick={(e) => e.stopPropagation()}
                aria-label="Save item"
              >
                ♡
              </button>
              {product.badge && <span className="product-badge simple-badge">{product.badge}</span>}
            </div>

            <div className="collection-copy simple-product-copy">
              <h3>{product.name}</h3>
              <div className="simple-price-row">
                <span>${product.price}</span>
              </div>
              <p>{product.materials}</p>
              <span className="shop-link">View Product</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProductView({ productId, onBackToCollection, onNavigateHome }) {
  const product = products.find((item) => item.id === productId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [zoomed, setZoomed] = useState(false)

  if (!product) return null

  const category = categories.find((item) => item.id === product.category)

  return (
    <section className="product-view">
      <div className="breadcrumb">
        <button onClick={onNavigateHome}>Home</button>
        <span>/</span>
        <button onClick={() => onBackToCollection(product.category)}>{category?.name}</button>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="product-detail-layout">
        <div className="product-gallery">
          <div className="thumbnail-column">
            {product.images.map((image, index) => (
              <button
                key={image}
                className={`thumbnail-button ${selectedImage === index ? 'active-thumb' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image} alt={`${product.name} view ${index + 1}`} />
              </button>
            ))}
          </div>

          <div className={`product-main-image-wrap ${zoomed ? 'zoomed' : ''}`}>
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="product-main-image"
            />
            <button className="zoom-button" onClick={() => setZoomed(!zoomed)}>
              {zoomed ? 'Exit Zoom' : 'Zoom Image'}
            </button>
          </div>
        </div>

        <div className="product-detail-copy simple-detail-copy">
          <p className="mini-label">{category?.name}</p>
          <h1>{product.name}</h1>

          <div className="detail-price-row">
            <span className="detail-price">${product.price}</span>
            <span className="detail-badge">{product.badge}</span>
          </div>

          <p className="product-detail-description">{product.description}</p>

          <div className="detail-box">
            <h3>Materials</h3>
            <p>{product.materials}</p>
          </div>

          <div className="detail-box">
            <h3>Size</h3>
            <p>{product.size}</p>
          </div>

          <div className="detail-box">
            <h3>Shipping</h3>
            <p>{product.shipping}</p>
          </div>

          <div className="detail-actions">
            <button className="primary-btn">Add to Bag</button>
            <button className="secondary-btn" onClick={() => onBackToCollection(product.category)}>
              Back to Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer-v2">
      <div>
        <h3>Luna Atelier</h3>
        <p>Minimal jewelry for everyday wear.</p>
      </div>
      <div className="footer-links-v2">
        <span>Bundles</span>
        <span>Necklaces</span>
        <span>Earrings</span>
        <span>Bracelets</span>
        <span>Rings</span>
      </div>
    </footer>
  )
}

export default function App() {
  const [view, setView] = useState('home')
  const [activeCategory, setActiveCategory] = useState('necklaces')
  const [activeProduct, setActiveProduct] = useState(null)

  const openCategory = (categoryId) => {
    setActiveCategory(categoryId)
    setView('collection')
  }

  const openProduct = (productId) => {
    const product = products.find((item) => item.id === productId)
    if (product) {
      setActiveCategory(product.category)
      setActiveProduct(productId)
      setView('product')
    }
  }

  const content = useMemo(() => {
    if (view === 'collection') {
      return (
        <CollectionView
          categoryId={activeCategory}
          onOpenProduct={openProduct}
          onNavigateHome={() => setView('home')}
        />
      )
    }

    if (view === 'product') {
      return (
        <ProductView
          productId={activeProduct}
          onBackToCollection={openCategory}
          onNavigateHome={() => setView('home')}
        />
      )
    }

    return <HomeView onOpenCategory={openCategory} onOpenProduct={openProduct} />
  }, [view, activeCategory, activeProduct])

  return (
    <div className="app-shell-v2">
      <Header onNavigateHome={() => setView('home')} onOpenCategory={openCategory} />
      <main>{content}</main>
      <Footer />
    </div>
  )
}