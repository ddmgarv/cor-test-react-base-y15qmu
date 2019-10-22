export const getResources = async () => {
  const data = await fetch("https://my-json-server.typicode.com/ddmgarv/jsons/resources").then(data => data.json());
  return data;
};
