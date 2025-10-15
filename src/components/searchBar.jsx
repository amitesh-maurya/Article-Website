import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import axios from 'axios';
import './searchBar.css';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch content dynamically when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                // Replace with your actual API URL
                const response = await axios.get('https://api.example.com/content');
                setFilteredResults(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError('Error fetching data');
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this runs once when the component mounts


    // Debounced search function
    const debouncedSearch = debounce((query) => {
        if (!query) {
            // If the query is empty, reset the filtered results
            setFilteredResults([]);
            return;
        }

        // Filter data based on search query
        const filtered = filteredResults.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredResults(filtered);
    }, 500); // 500ms debounce time


    // Handle search input change
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query); // Update the search query state
        debouncedSearch(query); // Trigger debounced search function
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange} />

            {/* Display loading message */}
            {loading && <div className="loading">Loading...</div>}

            {/* Display error message */}
            {error && <div className="error">{error}</div>}

            {/* Display filtered search results */}
            <div className="search-results">
                {filteredResults.length === 0 ? (
                    <div className="no-results">No results found</div>
                ) : (
                    filteredResults.map((item) => (
                        <div key={item.id} className="search-result-item">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default SearchBar;
