export const AboutFull = (props) => {
  return (
    <div>
      <div className="typePok">
        {props.type &&
          props.type.map((typeObjet) => {
            return <p className="typeStyle">{typeObjet.type.name} </p>;
          })}
      </div>
      <p className="aboutText">About</p>
      <div className="propPok">
        <div>
          <img src="/Weight.svg" alt="" />
          <p>{props.weight} kg</p>
          <p>Weight</p>
        </div>
        <div>
          <img src="/Height.svg" alt="" />
          <p>0,{props.height} m</p>
          <p>Height</p>
        </div>
        <div>
          <p>{props.moves}</p>
          <p>Moves</p>
        </div>
      </div>
      <div className="descripAbout">
        <p>{props.description} Description? </p>
      </div>
    </div>
  );
};
