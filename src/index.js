import showRepos from './views/show-repos.ts';
import showIssues from './views/show-issues.ts';
import throttle from './common/throttle.ts';

const userInput = document.getElementById('user-input');
const reposInput = document.getElementById('repos-input');

userInput.addEventListener('input', throttle((event) => {
  const query = event.target.value;
  showRepos(query);
}, 1000));

reposInput.addEventListener('input', throttle((event) => {
  const query = event.target.value;
  showIssues(query);
}, 500));
