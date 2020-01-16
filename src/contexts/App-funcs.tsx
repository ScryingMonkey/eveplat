const sidebarItemClick = (label: string) => {
  console.log(`...user clicked on [${label}]`);
};
const testFunc = () => {
  alert("test function from context!");
};

const funcs = {
  sidebarItemClick: sidebarItemClick,
  testFunc: testFunc
};
export default funcs;
