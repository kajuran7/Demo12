import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Designs() {
  const [design, setdesign] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/design/getdesign`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setdesign(data);
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filtereddesigns = design.filter((design) =>
    design.category.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === "" || design.category === selectedCategory)
  );

  const categories = [...new Set(design.map((d) => d.category))];

  return (
    <div>
      <Navbar />

      <div className="container_fill">
        <div className="search-box">
          <i className="bx bx-search"></i>
          <input
            type="text"
            placeholder="More Designs?"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        <div className="category-buttons" style={{paddingLeft: "700px", width: "1400px" }}>
          {categories.map((category) => (
            <button 
              key={category}
              className=  {category === selectedCategory ? "btn " :"btn"} style={{ marginRight:'20px', color:'black', backgroundColor: 'White' }}
              onClick={() => handleCategoryFilter(category)}
            >
    
              {category}
              <i class="bi bi--heart"></i>
            </button>
            
          ))}
        </div>

        <div className="container my-5" style={{ paddingLeft: "50px", width: "1400px" }}>
          {filtereddesigns.map((design) => (
            <div className="row" key={design._id} data-name={design.name}>
              <div className="col-lg-6" style={{ width: "700px" }}>
                <br />
                <br />
                <img className="w-100 shadow" src={design.designImage.url} alt={design.name} />
              </div>
              <div
                className="col-lg-6 "
                style={{ paddingTop: "100px", textAlign: "left", paddingLeft: "100px", width: "500px" }}
              >
                <div className="p-5 mt-4">
                  <h1 className="display">{design.category}</h1>
                  <p className="lead">Name: {design.name}</p>
                  <p className="lead">Sheetsize: ({design.sheetsize})</p>
                  <p className="lead">Price: {design.price}Rs</p>
                  <p className="lead">Size: {design.size}Mb</p>
                  <Link to={`/designs/${design._id}`} className="btn btn-outline-dark">
                    Fix-Me
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Designs;
