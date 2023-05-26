export const AboutFull = (props) => {
  return (
    <div>
      <div>
        <p>{props.type}</p>
      </div>
      <p>About</p>
      <div>
        <div>{props.weight}</div>
        <div>{props.height}</div>
        <div>{props.moves}</div>
      </div>
      <p>{props.description}</p>
    </div>
  );
};
