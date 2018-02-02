import React from "react";
import Ajax from "@fdaciuk/ajax";
import PropTypes from "prop-types";

const Search = ({handlekey}) => (
    <div className="search">
         <input type="search"
         placeholder="Nome do usuário" 
         onKeyUp={handlekey}
         />
    </div>
)

Search.propTypes = {
    handlekey : PropTypes.func.isRequired
}

export default Search;