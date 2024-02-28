const Title = ({ name }) => {
  return (
    <>
      <h1
        className="text-center"
        style={{
          fontSize: "2.5em",
          fontWeight: "bold",
          padding: "1em 0",
        }}
      >
        {name}
      </h1>
    </>
  );
};

export default Title;
