import Issue from '../types/issue';

function issueHTMLString(issue:Issue):string {
  const {
    number, title, body,
  } = issue;
  const issueDate:string = issue.created_at.substr(0, 10);
  let issueHTML = `${number} ${issueDate} ${title}`;
  if (body) {
    issueHTML += '<br>';
    if (body.length < 50) {
      issueHTML += body;
    } else {
      issueHTML += body.substr(0, 50);
    }
  }
  issueHTML += '<hr>';
  return issueHTML;
}

export default issueHTMLString;
