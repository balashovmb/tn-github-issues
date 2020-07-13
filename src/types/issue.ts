import User from './user';

type Issue = {
    number:number,
    title:string,
    body:string,
    // eslint-disable-next-line camelcase
    created_at:string,
    user: User
  }
export default Issue;
