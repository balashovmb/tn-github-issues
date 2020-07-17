function addListenerToButtons(fn:any):void {
  const issueButtons = document.getElementsByClassName('issue-btn');
  Array.from(issueButtons).forEach((element) => {
    element.addEventListener('click', fn);
  });
}

export default addListenerToButtons;
