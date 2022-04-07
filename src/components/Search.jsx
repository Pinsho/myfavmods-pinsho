import { useState } from "react";
/* import styles from "../css/Search.module.css"; */
import { useNavigate } from 'react-router-dom';
import { Form, FormControl, Button } from 'react-bootstrap';

export function Search() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("?search=" + searchText);
  };

  return (

    <Form className="d-flex" onSubmit={handleSubmit}>
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button variant="dark" type="submit">Search</Button>
    </Form>



    /* <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button className={styles.searchButton} type="submit">
          <i className="bx bx-search"></i>
        </button>
      </div>
    </form> */
  );
}
