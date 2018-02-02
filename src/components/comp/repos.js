import React from "react";
import PropTypes from "prop-types";

const Repos = ({className,title,repos}) =>(
    <div className={className}>
        <h2>{title}</h2>
        {repos.map((repo,index) =>(
            <li key={index}>
                <a key={index} href={repo.link}>{repo.name}</a>
            </li>
        ))}
    </div>
)

Repos.defaultProps = {
    className:"",
    title: "Titulo padrão"

}
Repos.propTypes = {
        className: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
}

export default Repos;