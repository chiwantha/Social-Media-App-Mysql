const home = () => {
  const headings = [];

  for (let i = 0; i <= 100; i++) {
    headings.push(<h1 key={i}>Home</h1>);
  }
  return <div className="">{headings}</div>;
};

export default home;
