import Issue from '../types/issue';
import userHtmlString from './user-html-string';

function issueHTMLString(issue:Issue):string {
  const {
    number, title, body, user, url,
  } = issue;
  let issueHTML = `<p> ${number}  ${title} </p>`;
  issueHTML += '<p>';
  if (body) {
    if (body.length < 50) {
      issueHTML += body;
    } else {
      issueHTML += body.substr(0, 50);
    }
  }
  issueHTML += ` <a href='./issue.html' data-number=${url} class='issue-btn'>Подробнее</a>`;
  issueHTML += '</p>';
  issueHTML += userHtmlString(user, issue.created_at);
  issueHTML += '<hr>';
  return issueHTML;
}

export default issueHTMLString;
