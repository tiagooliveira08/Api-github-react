import React from "react";

const Title = ({name,lastname}) =>(

	<span>{`${name} ${lastname}`}!</span>
)
Title.defaultProps = {
	name: "Desconhecido",
	lastname: "Sem sobrenome"
}


export default Title;