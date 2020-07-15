import loadingStatus from '../common/loading-status';
import getAddress from './get-address';
import loadObjects from '../requests/load-objects';
import Destinations from '../types/destinations';
import addElementsToSelect from './add-elements-to-select';
import User from '../types/user';

const issuesRoot:HTMLElement = document.getElementById('issues-root');
const serviceMsg:HTMLElement = document.getElementById('service-msg');
const assigneesList = <HTMLSelectElement>document.getElementById('assignees-list');

const showAssignies = async ():Promise<void> => {
  issuesRoot.innerHTML = '';
  const statusInterval = loadingStatus(serviceMsg);
  const address:string = getAddress(Destinations.assignees);
  try {
    const assignees = await loadObjects<User[]>(address);
    clearInterval(statusInterval);
    serviceMsg.innerText = '';
    addElementsToSelect(assigneesList, assignees, 'assignee');
  } catch (e) {
    clearInterval(statusInterval);
    console.error(e);
    serviceMsg.innerText = `Ошибка: ${e}`;
  }
};

export default showAssignies;
