export const AboutFull = (props) => {
  return (
    <div className="aboutClass">
      <div className="typePok">
        {props.type &&
          props.type.map((typeObjet) => {
            return <p className={`typeStyle ${typeObjet.type.name}`}>{typeObjet.type.name} </p>;
          })}
      </div>
      <p className={`aboutText ${props.typestyle}Color`}>About</p>
      <div className="propPok">
        <div>
          <div>
            <img src="/Weight.svg" alt="" />
            <p>{props.weight} kg</p>
          </div>
          <p>Weight</p>
        </div>
        <div>
          <div>
            <img src="/Height.svg" alt="" />
            <p>0,{props.height} m</p>
          </div>
          <p>Height</p>
        </div>
        <div>
        {props.ability &&
          props.ability.map((typeObjet) => {
            return <p className="">{typeObjet.ability.name} </p>;
          })}
          <p>Moves</p>
        </div>
      </div>
      <div className="descripAbout">
        <p>{props.description} Description? </p>
      </div>
    </div>
  );
};
