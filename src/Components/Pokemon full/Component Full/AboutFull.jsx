export const AboutFull = (props) => {
  return (
    <div className="aboutClass">
      <div className="typePok">
        {props.type &&
          props.type.map((typeObjet) => {
            return (
              <div key={typeObjet.type.name}>
                <p className={`typeStyle ${typeObjet.type.name}`}>
                  {typeObjet.type.name}
                </p>
              </div>
            );
          })}
      </div>
      <p className={`aboutText ${props.typestyle}Color`}>About</p>
      <div className="propPok">
        <div className="aboutBoxes">
          <div className="upBox">
            <img className="imgWeight" src="/Weight.svg" alt="" />
            <p>{props.weight} kg</p>
          </div>
          <p className="textoFijo">Weight</p>
        </div>
        <div className="aboutBoxes centralBox">
          <div className="upBox">
            <img className="imgHeight" src="/Height.svg" alt="" />
            <p>0,{props.height} m</p>
          </div>
          <p className="textoFijo">Height</p>
        </div>
        <div className="aboutBoxes">
          {props.ability &&
            props.ability.map((abilityObj) => {
              return (
                <div key={abilityObj.ability.name}>
                  <p className="movesSt">{abilityObj.ability.name}</p>
                </div>
              );
            })}
          <p className="textoFijo">Moves</p>
        </div>
      </div>
      <div className="descripAbout">
        <p>{props.description} Description?</p>
      </div>
    </div>
  );
};
