function getAddress():string {
  const user:string = (<HTMLInputElement>document.getElementById('user-input')).value;
  const repo:string = (<HTMLInputElement>document.getElementById('repo-input')).value;
  return `https://api.github.com/repos/${user}/${repo}/issues`;
}

export default getAddress;
