import showRepos from './views/show-repos';
import showIssues from './views/show-issues';
import throttle from './common/throttle';
import showAssignees from './views/show-assignees';

const userInput = document.getElementById('user-input');
const reposInput = document.getElementById('repos-input');
const assigneesInput = document.getElementById('assignees-input');

userInput.addEventListener('input', throttle(() => {
  showRepos();
}, 500));

reposInput.addEventListener('input', throttle(() => {
  showIssues(false);
}, 500));

reposInput.addEventListener('input', throttle(() => {
  showAssignees();
}, 500));

assigneesInput.addEventListener('input', throttle(() => {
  showIssues(true);
}, 500));
