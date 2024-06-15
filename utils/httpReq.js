const fetchData = async () => {
  const res = await fetch("data.json");
  const json = res.json();
  return json;
};

export { fetchData };
