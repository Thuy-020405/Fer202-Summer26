import { useState } from "react";

const items = [
  "Apple",
  "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew"
];
function SearchFilter() {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>
            <h2>Search Filter</h2>
            <input
                type="text"
                placeholder=" Seaech..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}export default SearchFilter;