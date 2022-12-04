const glob = require('glob');
const path = require('path');
const fs = require('fs');

const findModule = pattern => glob.sync(pattern);

const isDevelopment = () => process.env.NODE_ENV === 'development';

const getEntryNameArray = (() => {
  const pattern = `${process.cwd()}/src/projects/**/main.tsx`;
  const reg = /.+\/(\w+)\/main\.tsx$/;
  let entryNameList = [];
  return () => {
    if (entryNameList.length === 0) {
      entryNameList = findModule(pattern).map((entry) => {
        return entry.match(reg)[1];
      });
    }
    return entryNameList;
  };
})();

/**
 * 将路径或路径片段的序列解析为绝对路径
 * @param {string} relativePaths 一些列要拼装的路径
 * @returns 拼装之后的路径
 */
 const resolveApp = (() => {
  const appDirectory = fs.realpathSync(process.cwd());
  return (...relativePaths) => {
    return path.resolve(appDirectory, ...relativePaths);
  };
})();

const resolveAppSrc = (...relativePaths) => {
  return resolveApp('./src', ...relativePaths);
};

const hasMultipleCores = () => {
  try {
    return require('os').cpus().length > 1;
  } catch (e) {
    return false;
  }
};

module.exports = {
  getEntryNameArray,
  resolveApp,
  resolveAppSrc,
  isDevelopment,
  hasMultipleCores
}
