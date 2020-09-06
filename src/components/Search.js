import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("rien");
  const [debounceTerm, setDebounceTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceTerm(term);
    }, 700);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://fr.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debounceTerm,
        },
      });
      setResults(data.query.search);
    };
    if (debounceTerm) {
      search();
    }
  }, [debounceTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className=" item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://fr.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className=" content">
          <div className=" header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form">
        <div className="field">
          <label>Search</label>
          <input type="text" value={term} onChange={onInputChange} />
        </div>
      </form>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
