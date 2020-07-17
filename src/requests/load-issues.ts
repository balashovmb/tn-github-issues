import Issue from '../types/issue.ts';

const loadIssues = (address:string):Promise<Issue[]> => fetch(address).then((result) => {
  if (result.ok) {
    return result.json();
  }
  throw new Error(result.status.toString());
});

export default loadIssues;
