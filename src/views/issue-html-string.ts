import Issue from '../types/issue.ts';

function issueHTMLString(issue:Issue):string {
  const {
    number, title, body, user,
  } = issue;
  const issueDate:string = issue.created_at.substr(0, 10);
  let issueHTML = `<p> ${number}  ${title} </p>`;
  if (body) {
    issueHTML += '<p>';
    if (body.length < 50) {
      issueHTML += body;
    } else {
      issueHTML += body.substr(0, 50);
    }
    issueHTML += '</p>';
  }
  issueHTML += `<img src="${user.avatar_url}" width="30"> <a href='${user.url}'>${user.login}</a> ${issueDate}`;
  issueHTML += '<hr>';
  return issueHTML;
}

export default issueHTMLString;
