const React = require("react");

function Show(props) {
  const { pokemon } = props;
  const toCapital = pokemon.name;
  return (
    <div>
      <h1>Gotta Catch 'Em All</h1>

      <h2> {toCapital[0].toUpperCase() + toCapital.substring(1)}</h2>
      <br />
      <img src={pokemon.img+".jpg"}/><br/>
      <a href="/pokemon">Back</a>
    </div>
  );
}
module.exports = Show;
