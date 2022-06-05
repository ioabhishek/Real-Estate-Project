import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Listing = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addedproperty")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      })
      .catch((e) => console.log(e));
  }, []);
  console.log(items);

  const searchHandle = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      const data = await result.json();
      console.log(data);
      if (data) {
        setItems(data);
      }
    }
  };

  return (
    <>
      <div className="content">
        <div className="searchbar">
          <form class="search-bar">
            <input
              type="text"
              id="search"
              placeholder="Search PPD ID"
              onChange={searchHandle}
            />
            <svg id="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </form>
        </div>
        <div className="addbutton">
          
          <button type="button" class="button"><Link to='/desktop'>
            + Add Property</Link>
          </button>
          
        </div>
      </div>
      <div class="container">
        <table class="table">
          <tr>
            <th>PPDID</th>
            <th>Image</th>
            <th>Property</th>
            <th>Contact</th>
            <th>Area</th>
            <th>Views</th>
            <th>Status</th>
            <th>DaysLeft</th>
            <th>Action</th>
          </tr>

          {
          items.length > 0 ? 
            items.map((item, i) => (
              <tr key={i}>
                <td>{item._id}</td>
                <td><span><i class="fa-solid fa-images"></i></span></td>
                <td>{item.property}</td>
                <td>{item.mobile}</td>
                <td>{item.area}</td>
                <td>00</td>
                <td>Sold</td>
                <td>04</td>
                <td><span><i class="fa-solid fa-eye"></i></span><i class="fa-solid fa-pen"></i><span></span></td>
              </tr>
            ))
          : 
            <p className="res">No Result</p>
          }
        </table>
      </div>
    </>
  );
};

export default Listing;
