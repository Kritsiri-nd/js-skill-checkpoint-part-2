// เริ่มเขียนโค้ดตรงนี้
let getUser = () => {
  return fetch ("https://jsonplaceholder.typicode.com/users");
};
function filterName (data) {
  return data.filter(data => data.name.length>17).map(data=>data.name);
};

async function asyncchronousFuction() {
  const data = await getUser();
  const coonvertData = await data.json();
  const nameMoreThan17 = await filterName(coonvertData);
  console.log(nameMoreThan17);
}

asyncchronousFuction();