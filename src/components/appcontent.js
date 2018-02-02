import React from "react";
import Search from "./comp/search";
import UserInfo from "./comp/userinfo";
import Actions from "./comp/action";
import Repos from "./comp/repos";import userinfo from "./comp/userinfo";
import PropTypes from "prop-types"; 


const AppContent = ({userinfo,repos,starred,handlekey,checkrepos,checkstarred}) =>(
    <div className="AppContent">
        <Search handlekey={handlekey} />
        {!!userinfo && <UserInfo userinfo={userinfo} />}
        {!!userinfo && <Actions checkrepos={checkrepos} checkstarred={checkstarred}/>}
        
        <div className="flex-row">
        {!!repos.length && <Repos
                repos={repos} 
                className="repos"
                title="Repositórios"
            />}

            {!!starred.length && <Repos
                repos={starred} 
                className="starred"
                title="Favoritos"
            />}
        </div>

    </div>
)
AppContent.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array,
    starred: PropTypes.array
}



export default AppContent;