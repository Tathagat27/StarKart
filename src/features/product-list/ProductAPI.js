// A mock function to mimic making an async request for data
export default function fetchAllProducts() {
  return new Promise(async (resolve) => {
    //TODO: we'll not hardcore server url
    const response = await fetch("http://localhost:3420/products");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter) {

  let queryString = ''

  for(let key in filter){
    queryString += `${key}=${filter[key]}&`
  }
  return new Promise(async (resolve) => {
    //TODO: we'll not hardcore server url
    const response = await fetch("http://localhost:3420/products?"+queryString);
    const data = await response.json();
    resolve({ data });
  });
}