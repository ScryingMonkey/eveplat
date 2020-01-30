const sidebarItemClick = (label: string) => {
  console.log(`...user clicked on [${label}]`);
};
// Date methods
const getUnixSecondsFromTimestampString = (s: string): number => {
  // let s = "Timestamp(seconds=1579574527, nanoseconds=985000000)";
  try {
    let oi = s.indexOf("=") + 1;
    let fi = s.indexOf(",") - oi;
    return parseInt(s.substr(oi, fi));
  } catch (err) {
    throw err;
  }
};
const convertToShortDate = (date: Date) => {
  // console.log(`...convertToShortDate(date)`);
  // console.log(date);
  return `${date.getDate()}/${date.getMonth()}/${date.getDate()}`;
};

const convertToLongDate = (date: Date) => {
  // console.log(`...convertToLongDate(date)`);
  // console.log(date);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
};
const logObject = (row: any): string => {
  console.log(row);
  return "";
};
const appFuncs = {
  sidebarItemClick: sidebarItemClick,
  getUnixSecondsFromTimestampString: getUnixSecondsFromTimestampString,
  convertToLongDate: convertToLongDate,
  convertToShortDate: convertToShortDate,
  logObject: logObject
};
export type AppFuncs = typeof appFuncs;
export default appFuncs;
