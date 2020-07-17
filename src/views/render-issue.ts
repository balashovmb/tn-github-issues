import Issue from '../types/issue';
import userHtmlString from './user-html-string';

function renderIssue(issue:Issue):void {
  const {
    title, body, user, state,
  } = issue;
  const titleRoot:HTMLElement = document.getElementById('title');
  const stateRoot:HTMLElement = document.getElementById('state');
  const bodyRoot:HTMLElement = document.getElementById('body');
  const userRoot:HTMLElement = document.getElementById('user');
  titleRoot.innerText = title;
  stateRoot.innerText = state;
  bodyRoot.innerText = body;
  userRoot.innerHTML = userHtmlString(user, issue.created_at);
}

export default renderIssue;

// user -
// state
// title
// body
// repo
