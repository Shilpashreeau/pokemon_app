const React = require("react");

function Index(props) {
  const { pokemon } = props;
  console.log(pokemon);
  const myStyle = {
    color: "#ffffff",
    backgroundColor: "#000000",
  };
  return (
    <div style={myStyle}>
      <h1>See All The Pokemon!</h1>
      <ul>
        
        {pokemon.map((ele, i) => {
            const toCapital = ele.name;
           
            return(
          <li >
          <a href={`/pokemon/${i}`}>   {toCapital[0].toUpperCase() + toCapital.substring(1)};<br/></a>
            {/* {ele.img} */}
          </li>)
        })}
        
      </ul>
    </div>
  );
}
module.exports = Index;
