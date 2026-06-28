import { Carousel } from "react-bootstrap";

function Home() {
  // Ảnh thumbnail tròn phía dưới banner
  const thumbnails = [
    "/images/menu-01.jpg",
    "/images/menu-02.jpg",
    "/images/menu-03.jpg",
    "/images/menu-04.jpg",
    "/images/menu-05.jpg",
    "/images/menu-06.jpg",
  ];

  return (
    <div className="home-page">
      <Carousel controls indicators interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide1.jpg"
            alt="Slide 1"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide2.jpg"
            alt="Slide 2"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide3.jpg"
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel>

      <div className="thumbnail-row d-flex justify-content-center gap-4 my-4">
        {thumbnails.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`thumbnail-${index}`}
            className="rounded-circle border"
            style={{ width: "90px", height: "90px", objectFit: "cover" }}
          />
        ))}
      </div>

      <h2 className="text-danger ms-3">This is Home Page</h2>
    </div>
  );
}

export default Home;