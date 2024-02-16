import React, { useEffect, useState } from "react";
import data from "../Data";
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function SearchAndFilter() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
alert(212)
  }, []);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const radioBtns = [
    "Male",
    "Female",
    "Agender",
    "Non-binary",
    "Polygender",
    "Genderfluid",
    "Biggender",
    "Genderqueer",
    "All",
  ];
  return (
    <>
      {loading ? (
        <div className="text-center">
          <ClipLoader
            css={override}
            size={200}
            color={"red"}
            loading={loading}
          />
        </div>
      ) : (
        <div>
          {/* Search Functionality */}
          <h6>Search by first name</h6>
          <form className="d-flex mb-3" role="search">
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          {/* //filter functionality */}
          <h6>Filter by gender</h6>
          <form
            className="d-flex mb-3 gap-2"
            onChange={(e) => setFilter(e.target.value)}
            role="search"
          >
            {radioBtns.map((btn) => (
              <div key={btn}>
                <input type="radio" value={btn} name="gender" id={btn} />
                <label htmlFor={btn}>{btn}</label>
              </div>
            ))}
          </form>
          <div className="overflow-y-auto h-auto </div> ">
            <table className="table border border-dark table-striped table-hover">
              <thead>
                <tr>
                  <th>Roll Number</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.first_name.toLowerCase().includes(search);
                  })
                  .filter((i) => {
                    return filter === "All" ? true : i.gender.includes(filter);
                  })
                  .map((v) => (
                    <tr key={v.id}>
                      <td>{v.id}</td>
                      <td>{v.first_name}</td>
                      <td>{v.last_name}</td>
                      <td>{v.email}</td>
                      <td>{v.gender}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
