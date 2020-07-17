import User from '../types/user';

function userHtmlString(user:User, issueCreated:string):string {
  const issueDate:string = issueCreated.substr(0, 10);
  return `<img src="${user.avatar_url}" width="30"> <a href='${user.url}'>${user.login}</a> ${issueDate}`;
}

export default userHtmlString;
