// eslint-disable-next-line @typescript-eslint/ban-types
function throttle(func:Function, delay:number):Function {
  let timeout:NodeJS.Timeout = null;
  return function throttledFunc(arg:string) {
    if (!timeout) {
      timeout = setTimeout(() => {
        func.call(this, arg);
        timeout = null;
      }, delay);
    }
  };
}

export default throttle;
