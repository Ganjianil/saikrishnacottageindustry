import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import apmd from "/apmd.webp";
import ppd from "/ppd.jpg";
import ppdlist from "/ppdist.jpg";
import ppmm from "/ppmm.jpeg";
import ppmmd from "/ppmmd.jpg";
import ppmmk from "/ppmmk.webp";
import PPRM from "/PPRM.jpg";
import srm from "/silverrawmaterial.webp";
import srmd from "/srmd.jpg";
// Sample media data (replace with your own media URLs)
const mediaItems = [
  {
    type: "image",
    src: apmd,
    alt: "Automatic Paper plate machine manufactures",
  },

  {
    type: "image",
    src: ppd,
    alt: "Paper plate distrubutors",
  },
  {
    type: "image",
    src: ppdlist,
    alt: "",
  },

  {
    type: "image",
    src: ppmm,
    alt: "Paper plate machine manufactures",
  },
  {
    type: "image",
    src: ppmmk,
    alt: "",
  },
  {
    type: "image",
    src: ppmmd,
    alt: "Paper plate machine manufactures distrubutors",
  },
  {
    type: "image",
    src: PPRM,
    alt: "Paper plate Raw material dealers",
  },
  {
    type: "image",
    src: srm,
    alt: "Silver Raw material dealers",
  },
  {
    type: "image",
    src: srmd,
    alt: "Silver Raw material distrubutors",
  },
];

// Function to group items into sets of 4
const groupItems = (items, groupSize) => {
  const grouped = [];
  for (let i = 0; i < items.length; i += groupSize) {
    grouped.push(items.slice(i, i + groupSize));
  }
  return grouped;
};

const MediaGallery = () => {
  const carouselRef = useRef(null);
  const itemsPerSlide = 4; // Show 4 items per slide
  const groupedMedia = groupItems(mediaItems, itemsPerSlide);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement && window.bootstrap) {
      const bsCarousel = new window.bootstrap.Carousel(carouselElement, {
        interval: 3000, // Auto-scroll every 3 seconds
        ride: "carousel",
        pause: "hover",
      });

      // Pause videos when they are not active
      carouselElement.addEventListener("slid.bs.carousel", () => {
        const videos = carouselElement.querySelectorAll("video");
        videos.forEach((video) => {
          if (!video.closest(".carousel-item.active")) {
            video.pause();
          }
        });
      });

      return () => {
        bsCarousel.dispose();
      };
    }
  }, []);

  return (
    <div className="min-vh-100 bg-light m-0 p-0">
      <div className="container-fluid p-3 pb-5">
        <h2 className="text-center fw-bold mb-4">Our Media Gallery</h2>
        <div
          id="mediaCarousel"
          className="carousel slide w-100"
          data-bs-ride="carousel"
          ref={carouselRef}
        >
          <div className="carousel-inner">
            {groupedMedia.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className={`carousel-item ${groupIndex === 0 ? "active" : ""}`}
              >
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 justify-content-center">
                  {" "}
                  {/* Reduced gutter with g-2 */}
                  {group.map((item, itemIndex) => (
                    <div key={itemIndex} className="col">
                      <div className="card shadow-sm border-0 h-100">
                        {" "}
                        {/* Added h-100 to stretch card */}
                        {item.type === "image" ? (
                          <img
                            src={item.src}
                            alt={item.alt}
                            className="d-block w-100 rounded"
                            style={{ objectFit: "cover", height: "150px" }}
                          />
                        ) : (
                          <video
                            controls
                            className="d-block w-100 rounded"
                            style={{ objectFit: "cover", height: "150px" }}
                          >
                            <source src={item.src} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        )}
                        <div className="card-body text-center p-1">
                          {" "}
                          {/* Reduced padding with p-1 */}
                          <p className="card-text mb-0">{item.alt}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#mediaCarousel"
            data-bs-slide="prev"
            style={{ width: "15%" }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#mediaCarousel"
            data-bs-slide="next"
            style={{ width: "15%" }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaGallery;
