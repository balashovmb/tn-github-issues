import loadObjects from '../requests/load-objects';
import Issue from '../types/issue';
import renderIssue from './render-issue';

const showIssueInfo = async ():Promise<void> => {
  const url = document.cookie.split('=')[1];
  try {
    const issue = await loadObjects<Issue>(url);
    renderIssue(issue);
  } catch (e) {
    console.log(e);
  }
  document.cookie = "issue-url=''";
};

export default showIssueInfo;
