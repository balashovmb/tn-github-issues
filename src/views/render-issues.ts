import Issue from '../types/issue.ts';
import appendIssue from './append-issue.ts';

function renderIssues(issuesRoot:HTMLElement, issues:Issue[]):void {
  issues.forEach((issue) => appendIssue(issuesRoot, issue));
}

export default renderIssues;
