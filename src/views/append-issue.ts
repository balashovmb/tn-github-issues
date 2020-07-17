import Issue from '../types/issue.ts';
import issueHTMLString from './issue-html-string.ts';

function appendIssue(container:HTMLElement, issue:Issue):void {
  const htmlString = issueHTMLString(issue);
  const div:HTMLElement = document.createElement('div');
  div.innerHTML = htmlString;
  container.append(div);
}

export default appendIssue;
