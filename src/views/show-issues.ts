import loadingStatus from '../common/loading-status';
import getAddress from './get-address';
import Issue from '../types/issue';
import loadObjects from '../requests/load-objects';
import renderIssues from './render-issues';
import Destinations from '../types/destinations';
import addListenerToButtons from './add-listener-to-buttons';
import openIssueInfo from './open-issue-info';

const issuesRoot:HTMLElement = document.getElementById('issues-root');
const serviceMsg:HTMLElement = document.getElementById('service-msg');

const showIssues = async (assigned:boolean):Promise<void> => {
  issuesRoot.innerHTML = '';
  const statusInterval = loadingStatus(serviceMsg);
  let address:string;
  if (assigned) {
    address = getAddress(Destinations.assignedIssues);
  } else {
    address = getAddress(Destinations.issues);
  }
  try {
    const issues = await loadObjects<Issue[]>(address);
    serviceMsg.innerText = '';
    renderIssues(issuesRoot, issues);
    addListenerToButtons(openIssueInfo);
  } catch (e) {
    console.error('Error in showIssues', e);
    if (e.toString() === 'Error: 404') {
      serviceMsg.innerText = 'Репозиторий с таким названием отсутсвует у пользователя';
    } else {
      serviceMsg.innerText = `Ошибка: ${e}`;
    }
  } finally {
    clearInterval(statusInterval);
  }
};

export default showIssues;
