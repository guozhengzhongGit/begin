const glob = require('glob');
const path = require('path');
const fs = require('fs');

const findModule = pattern => glob.sync(pattern);

// const getEntryNameArray = (() => {
//   const pattern = `${process.cwd()}/src/pages/**/main.tsx`;
//   const reg = /.+\/(\w+)\/main\.tsx$/;
//   let arr = [];
//   return () => {
//     console.log(findModule(pattern))
//     if (arr.length === 0) {
//       arr = findModule(pattern).map(entry => {
//         console.log(entry);
//       })
//     }
//     return arr;
//   }
// })();

const getEntryNameList = (() => {
  const pattern = `${process.cwd()}/src/pages/**/main.tsx`;
  const reg = /.+\/(\w+)\/main\.tsx$/;
  let entryNameList = [];
  return () => {
    console.log(findModule(pattern));
    if (entryNameList.length === 0) {
      entryNameList = findModule(pattern).map((entry) => {
        return entry.match(reg)[1];
      });
    }
    return entryNameList;
  };
})();
getEntryNameList();
