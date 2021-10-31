import { useEffect, useState } from "react";
import * as queryString from "query-string";

const SearchableJoke = () => {

      const [search, setSearch] = useState("Dog");
      const [joke, setJoke] = useState(undefined);
      const [page, setPage] = useState(1)

      useEffect(() => {
            fetch("https://icanhazdadjoke.com/search?" + queryString.stringify({
                  page: page,
                  limit: 5,
                  term: search
            }), {
                  headers: {
                        "Accept": "application/json"
                  }
            }).then(res => res.json()).then(data => {
                  console.log(data)
                  if (data.results.length === 0) return
                  setJoke(data)
            });
      }, [search, page])



      return <div className={"component"}>
            <h1>Searchable Dad Jokes.</h1>
            <input value={search} onChange={(e) => setSearch(e.target.value)} />
            <p>Search term: {search}</p>
            <div className={"paged-control-container"}>
                  <button onClick={() => setPage(joke?.previous_page)}>Prev page</button>
                  <p>Page {joke?.current_page}</p>
                  <button onClick={() => setPage(joke?.next_page)}>Next Page</button>
            </div>
            {joke.results.map(entry => <p key={entry.id}>{entry.joke}</p>)}
      </div>
}


export { SearchableJoke };