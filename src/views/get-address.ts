import Destinations from '../types/destinations';

function getAddress(destination:Destinations):string {
  const user:string = (<HTMLInputElement>document.getElementById('user-input')).value;
  const repo:string = (<HTMLInputElement>document.getElementById('repos-input')).value;
  const assignee:string = (<HTMLInputElement>document.getElementById('assignees-input')).value;
  const apiRoot = 'https://api.github.com/';

  function issuesAddr():string {
    return `${apiRoot}repos/${user}/${repo}/issues`;
  }

  let address:string;

  switch (destination) {
    case Destinations.user:
      address = `${apiRoot}users/${user}/repos`;
      break;
    case Destinations.issues:
      address = issuesAddr();
      break;
    case Destinations.assignees:
      address = `${apiRoot}repos/${user}/${repo}/assignees`;
      break;
    case Destinations.assignedIssues:
      if (assignee) {
        address = `${apiRoot}repos/${user}/${repo}/issues?assignee=${assignee}`;
      } else {
        address = issuesAddr();
      }
      break;
    default:
      break;
  }
  return address;
}

export default getAddress;
