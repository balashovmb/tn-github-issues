import Issue from '../types/issue';
import appendIssue from './append-issue';

function renderIssues(issuesRoot:HTMLElement, issues:Issue[]):void {
  const issuesPlace = issuesRoot;
  if (issues.length === 0) {
    issuesPlace.innerText = 'Замечания по данному запросу отсутствуют.';
  } else {
    issues.forEach((issue) => appendIssue(issuesRoot, issue));
  }
}

export default renderIssues;
