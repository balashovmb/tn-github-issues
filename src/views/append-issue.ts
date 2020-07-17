import Issue from '../types/issue';
import issueHTMLString from './issue-html-string';

function appendIssue(container:HTMLElement, issue:Issue):void {
  const htmlString = issueHTMLString(issue);
  const div:HTMLElement = document.createElement('div');
  div.innerHTML = htmlString;
  container.append(div);
}

export default appendIssue;
