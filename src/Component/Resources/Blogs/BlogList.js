import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import blogsData from "./blogs.json"; // Import JSON data
import images from "./BlogImage"; // Import image mappings
import { Link } from "react-router-dom";

const BlogList = () => {
  const categories = ["All", "WhatsApp Service", "Bulk SMS Service", "OTP Service", "Voice Call"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9; // Number of blogs per page

  const location = useLocation();
  const navigate = useNavigate();

  // Update page number based on URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get("page")) || 1;
    setCurrentPage(page);
  }, [location.search]);

  // Filter blogs by category
  const filteredBlogs =
    selectedCategory === "All"
      ? blogsData
      : blogsData.filter((blog) => blog.category === selectedCategory);

  // Pagination logic
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    navigate(`?page=${page}`); // Update URL with the current page number
  };

  return (
    <div className="bg-light">
      <div className="container p-4">
        {/* Category buttons at the top */}
        <div className="mb-4 text-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"} me-2`}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1); // Reset to the first page on category change
                navigate("?page=1"); // Reset URL to page 1
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row">
          {/* Display blogs in 3 columns */}
          {currentBlogs.map((blog) => (
            
            <Link
            to={blog.link}
            key={`${blog.id}-${blog.title}`}
            className="col-md-4 para-blog text-decoration-none"
          > {/* Unique key */}
              <div className="card mb-4 shadow-sm border-0">
                <img
                  src={images[blog.id]}
                  alt={blog.title}
                  className="card-img-top"
                 
                />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text text-muted">
                    {blog.category} · {blog.date}
                  </p>
                  <p className="para-color">{blog.description}</p>
                  <Link to={blog.link}>
                  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#moreText" aria-expanded="false" aria-controls="moreText"> Read More</button>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            {[...Array(Math.ceil(filteredBlogs.length / blogsPerPage))].map((_, index) => (
              <li className="page-item" key={`page-${index}`}> {/* Unique key */}
                <button
                  className={`page-link ${currentPage === index + 1 ? "active" : ""}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BlogList;
