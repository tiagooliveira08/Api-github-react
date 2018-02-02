import React from "react";

const Actions = ({checkrepos,checkstarred}) => (
    <div className="actions">
        <button onClick={checkrepos}>Ver repositórios</button>
        <button onClick={checkstarred}>Ver favoritos</button>
    </div>
)

export default Actions;