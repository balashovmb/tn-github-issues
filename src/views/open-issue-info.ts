function openIssueInfo(e):void {
  e.preventDefault();
  console.log(e);
  document.cookie = `issue-url=${e.target.dataset.number}`;
  window.open('./issue.html', '_self');
}

export default openIssueInfo;
