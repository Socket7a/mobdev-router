import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { products } from "../data/products.js"


export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const query = (searchParams.get("q") || "").trim()
  const results = products.filter(el => el.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <section className="page-shell">
      <p className="page-eyebrow">Поиск</p>
      <h1 className="page-title">Результаты поиска</h1>
      <p className="page-sub">
        {query ? `Запрос: "${query}"` : 'Введите запрос в поиске сверху'}
      </p>

      <div className="product-grid">
        {results.length > 0 ? (
          results.map(product => (
            <ProductCard key={product.id} product={product}/>
          ))
        ) : (
          <div className="empty-note" style={{ gridColumn: '1 / -1' }}>
            {query ? 'Ничего не найдено' : 'Начните вводить название растения'}
          </div>
        )}
      </div>
    </section>
  );
}
