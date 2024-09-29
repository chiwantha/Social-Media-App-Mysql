const home = () => {
  const headings = [];

  for (let i = 0; i <= 100; i++) {
    headings.push(<h1 key={i}>Home</h1>);
  }
  return (
    <div className="dark:bg-[#555] bg-[#f6f3f3] dark:text-white py-5 px-16">
      {headings}
    </div>
  );
};

export default home;
