const IdDisplay = ({ id }) => {
  if (id >= 10) {
    return <h6>#{id}</h6>;
  } else {
    return <h6>#0{id}</h6>;
  }
};

export default IdDisplay;
