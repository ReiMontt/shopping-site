import { Link } from "react-router-dom";

export default function SearchBar({ onSearch, query }) {
    const handleSearchChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <div className="search-bar-wrapper">
            <div className="search-bar">
                <form autoComplete="off" id="search-query" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Search"
                        onChange={handleSearchChange}
                        value={query}   
                    />
                </form>
                <Link to={`/`} className="search-button">
                    Search
                </Link>
            </div>
        </div>
    );
}
