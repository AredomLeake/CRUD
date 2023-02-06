const Search = ({ search, setSearch }) => {
  return (
    <form className="searchform" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">search</label>
      <input
        id="search"
        type="text"
        placeholder="search items"
        role="searchbox"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
