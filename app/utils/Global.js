

//全局日志 此处对性能损耗特别大 生产环境中必须完全去除console > babel
if (!__DEV__) {
  global.console = {
    info: () => {
    },
    log: () => {
    },
    warn: () => {
    },
    debug: () => {
    },
    error: () => {
    },
  };
}
global.log = console.log;