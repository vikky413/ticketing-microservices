import buildClient from '../api/build-client';
import { NextPageContext } from 'next';

const LandingPage = ({ currentUser }: any) => {
  return currentUser ? (
    <h1>You are signed in: {currentUser}</h1>
  ) : (
    <h1>You are not signed in </h1>
  );
};

// ssr
LandingPage.getInitialProps = async (context: NextPageContext) => {
  console.log('Landing Page!!!');
  // create client
  const client = buildClient(context);
  //call get
  const { data } = await client.get(`/api/users/currentuser`);
  return data;
};

export default LandingPage;
