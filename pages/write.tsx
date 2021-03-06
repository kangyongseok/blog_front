import WriteContainer from '../containers/Write/WriteContainer';
import styled from 'styled-components';
import { getPostsListAsync } from '../store/modules/post';
import { NextPageCustom } from '../lib/types/nextCustomTypes';

type writeProps = {};
const Wrapper = styled.main`
  width: 100%;
  height: 100rem;
  margin: auto;
`;
const Write: NextPageCustom = ({}: writeProps) => {
  return (
    <Wrapper>
      <WriteContainer />
    </Wrapper>
  );
};

Write.getInitialProps = async ({ store, isServer, req, res }) => {
  if (!req.headers.cookie) {
    res.writeHead(302, { Location: '/' })
    res.end()
    return; 
  }
  if(isServer) {
    console.log(req.headers.cookie);
    await store.dispatch(getPostsListAsync.request(30));
  }
  return { };
};

export default Write;
