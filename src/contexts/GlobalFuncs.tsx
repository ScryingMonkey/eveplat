

const sidebarItemClick = (label: string) => {
  console.log(`...user clicked on [${label}]`);
};
const testFunc = () => {
  alert("test function from context!");
};

const appFuncs = {
  sidebarItemClick: sidebarItemClick,
  testFunc: testFunc
};
export type AppFuncs = typeof appFuncs;
export default appFuncs;
