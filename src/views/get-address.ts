import Destinations from '../types/destinations.ts';

function getAddress(destination:Destinations):string {
  const user:string = (<HTMLInputElement>document.getElementById('user-input')).value;
  let address:string;
  if (destination === Destinations.user) {
    address = `https://api.github.com/users/${user}/repos`;
  } else if (destination === Destinations.issues) {
    const repo:string = (<HTMLInputElement>document.getElementById('repos-input')).value;
    address = `https://api.github.com/repos/${user}/${repo}/issues`;
  }
  return address;
}

export default getAddress;
