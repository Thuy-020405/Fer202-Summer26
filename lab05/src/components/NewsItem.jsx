function NewsItem({ news }) {
  return (
    <div className="news-item card h-100">
      <img
        src={`/${news.images}`}
        alt={news.title}
        className="card-img-top"
        style={{ height: "160px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{news.title}</h6>
        <p className="card-text small text-muted">{news.description}</p>
        <a href="#" className="mt-auto small">
          {news.title}
        </a>
      </div>
    </div>
  );
}

export default NewsItem;