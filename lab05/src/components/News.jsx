import { newLists } from "../data/newsData";
import NewsItem from "./NewsItem";

function News() {
  return (
    <div className="container my-4">
      <h3 className="text-danger mb-4">News Category</h3>
      <div className="row g-4">
        {newLists.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
            <NewsItem news={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;