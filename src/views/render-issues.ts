import Issue from '../types/issue';
import appendIssue from './append-issue';

function renderIssues(issuesRoot:HTMLElement, issues:Issue[]):void {
  issues.forEach((issue) => appendIssue(issuesRoot, issue));
}

export default renderIssues;
