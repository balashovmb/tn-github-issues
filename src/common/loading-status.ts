function loadingStatus(statusRoot:HTMLElement):NodeJS.Timeout {
  let bar = '';
  const statusPlace = statusRoot;
  const timerId = setInterval(() => {
    bar += '|';
    statusPlace.innerText = `Загрузка ${bar}`;
  }, 200);
  return timerId;
}

export default loadingStatus;
