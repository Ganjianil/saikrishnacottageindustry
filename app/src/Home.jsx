import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import ProductsPage from "./ProductsPage";
import Contact from "./Contact";
import Banner from "./Banner";
import About from "./About";
import MediaGallery from "./MediaGallery";
import Haeder from "./Haeder";
const Home = () => {
  const initialProducts = [
    {
      id: 1,
      title: "Paper Plate Making Machine Dealers",
      description:
        "Find top dealers for paper plate making machines with high-quality equipment.",
      image: "https://via.placeholder.com/150?text=Paper+Plate+Machine",
    },
    {
      id: 2,
      title: "Paper Plate Raw Material Dealers",
      description:
        "Suppliers of raw materials for paper plate production, including 80-500 GSM paper.",
      image: "https://via.placeholder.com/150?text=Paper+Raw+Material",
    },
    {
      id: 3,
      title: "Paper Plate Dealers",
      description:
        "Dealers offering a variety of disposable paper plates for events and catering.",
      image: "https://via.placeholder.com/150?text=Paper+Plates",
    },
    {
      id: 4,
      title: "Automatic Paper Plate Making Machine Manufacturers",
      description:
        "Manufacturers of fully automatic machines producing 2000-3000 plates per hour.",
      image:
        "https://via.placeholder.com/150?text=Automatic+Paper+Plate+Machine",
    },
    {
      id: 5,
      title: "Crockery Dealers",
      description:
        "Dealers providing a wide range of crockery for home and commercial use.",
      image: "https://via.placeholder.com/150?text=Crockery",
    },
    {
      id: 6,
      title: "Crockery Distributors",
      description:
        "Distributors of premium crockery for hotels, restaurants, and events.",
      image: "https://via.placeholder.com/150?text=Crockery+Distributor",
    },
    {
      id: 7,
      title: "Crockery Exporters",
      description:
        "Export-quality crockery for international markets, ensuring durability and design.",
      image: "https://via.placeholder.com/150?text=Crockery+Export",
    },
    {
      id: 8,
      title: "Crockery Importers",
      description:
        "Importers of stylish and functional crockery from global brands.",
      image: "https://via.placeholder.com/150?text=Crockery+Importer",
    },
    {
      id: 9,
      title: "Crockery Manufacturers",
      description:
        "Manufacturers of high-quality crockery with modern designs.",
      image: "https://via.placeholder.com/150?text=Crockery+Manufacturing",
    },
    {
      id: 10,
      title: "Crockery Wholesalers",
      description:
        "Wholesale suppliers of crockery at competitive prices for bulk orders.",
      image: "https://via.placeholder.com/150?text=Crockery+Wholesale",
    },
    {
      id: 11,
      title: "Paper Plate Distributors",
      description:
        "Distributors of eco-friendly and disposable paper plates in various sizes.",
      image: "https://via.placeholder.com/150?text=Paper+Plates",
    },
    {
      id: 12,
      title: "Paper Plate Making Machine Manufacturers",
      description:
        "Leading manufacturers of hydraulic and automatic paper plate making machines.",
      image: "https://via.placeholder.com/150?text=Paper+Plate+Machine",
    },
    {
      id: 13,
      title: "Paper Plate Manufacturers",
      description:
        "Producers of durable and biodegradable paper plates for all occasions.",
      image: "https://via.placeholder.com/150?text=Paper+Plates",
    },
    {
      id: 14,
      title: "Silver Paper Plates Raw Material Dealers",
      description:
        "Dealers of silver-laminated raw materials for premium paper plates.",
      image: "https://via.placeholder.com/150?text=Silver+Paper+Raw+Material",
    },
    {
      id: 15,
      title: "Silver Paper Plates Raw Material Wholesalers",
      description:
        "Wholesale suppliers of silver paper plate raw materials in bulk.",
      image: "https://via.placeholder.com/150?text=Silver+Paper+Wholesale",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(initialProducts);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = initialProducts.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
    setProducts(filtered);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setProducts(initialProducts);
  };

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #f7fafc 0%, #edf2f7 100%)",
        minHeight: "100vh",
        padding: "3rem 1rem",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

          .products-container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .search-bar-wrapper {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 1rem;
            border-radius: 15px;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
            margin-bottom: 2rem;
          }

          .search-input-container {
            position: relative;
            display: flex;
            align-items: center;
          }

          .search-bar {
            border: 1px solid #e2e8f0;
            border-radius: 30px;
            padding: 0.75rem 2.5rem 0.75rem 2.5rem; /* Adjusted padding for icons */
            font-size: 1rem;
            font-weight: 500;
            color: #2d3748;
            background: #fff;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            width: 100%;
          }

          .search-bar::placeholder {
            color: #a0aec0;
          }

          .search-bar:focus {
            outline: none;
            border-color: #3182ce;
            box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
          }

          .search-icon {
            position: absolute;
            left: 0.75rem;
            color: #a0aec0;
            font-size: 1rem;
          }

          .cancel-icon {
            position: absolute;
            right: 0.75rem;
            color: #718096;
            font-size: 1.2rem;
            cursor: pointer;
            transition: color 0.3s ease;
          }

          .cancel-icon:hover {
            color: #2d3748;
          }

          .product-card {
            background: #fff;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
            min-height: 400px;
          }

          .product-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
          }

          .product-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-bottom: 1px solid #edf2f7;
          }

          .product-content {
            padding: 1.25rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .product-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: #1a202c;
            margin-bottom: 0.5rem;
            line-height: 1.3;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .product-description {
            font-size: 0.9rem;
            color: #718096;
            line-height: 1.5;
            flex-grow: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }

          .no-results {
            background: #fff;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
            font-size: 1.1rem;
            color: #718096;
            text-align: center;
          }

          @media (max-width: 576px) {
            .products-container {
              padding: 0 0.5rem;
            }

            .search-bar-wrapper {
              padding: 0.75rem;
            }

            .search-bar {
              padding: 0.5rem 2rem 0.5rem 2rem; /* Adjusted padding for icons */
              font-size: 0.9rem;
            }

            .search-icon {
              left: 0.5rem;
              font-size: 0.9rem;
            }

            .cancel-icon {
              right: 0.5rem;
              font-size: 1rem;
            }

            .product-card {
              border-radius: 10px;
              min-height: 350px;
            }

            .product-image {
              height: 150px;
            }

            .product-content {
              padding: 1rem;
            }

            .product-title {
              font-size: 1rem;
              -webkit-line-clamp: 2;
            }

            .product-description {
              font-size: 0.85rem;
              -webkit-line-clamp: 3;
            }

            .no-results {
              padding: 1.5rem;
              font-size: 1rem;
            }
          }
        `}
      </style>

      <div className="container-fluid">
        <div className="search-bar-wrapper">
          <div className="row">
            <div className="col-12 col-md-6 mx-auto">
              <div className="search-input-container">
                <i className="bi bi-search search-icon"></i>
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search products (e.g., Paper Plate Dealers, Crockery Manufacturers)"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                {searchTerm.length > 0 && (
                  <i
                    className="bi bi-x cancel-icon"
                    onClick={handleClearSearch}
                  ></i>
                )}
              </div>
            </div>
          </div>
        </div>

        {searchTerm.length > 0 && (
          <div className="products-container">
            <div className="row">
              {products.length > 0 ? (
                products.map((product) => (
                  <div
                    key={product.id}
                    className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4"
                  >
                    <div className="product-card">
                      <img
                        src={product.image || "https://via.placeholder.com/150"}
                        className="product-image"
                        alt={product.title}
                      />
                      <div className="product-content">
                        <div>
                          <h5 className="product-title">{product.title}</h5>
                          <p className="product-description">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <p className="no-results">
                    No products found matching your search.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <Haeder />

      <Banner />
      <MediaGallery />
      <ProductsPage />
      <Contact />
      <About />
    </div>
  );
};

export default Home;
