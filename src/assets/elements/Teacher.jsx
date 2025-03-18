export const Teacher = (props) => {
    return (
      <div className="card">
        <h3>Teacher {props.name}</h3>
        {props.action(props.name)}
      </div>
    );
  };