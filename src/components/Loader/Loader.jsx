// import { MagnifyingGlass } from 'react-loader-spinner';
import { Skeleton, Stack } from '@chakra-ui/react';

const Loader = () => (
  // <MagnifyingGlass
  //   visible={true}
  //   height="80"
  //   width="80"
  //   ariaLabel="MagnifyingGlass-loading"
  //   wrapperStyle={{}}
  //   wrapperClass="MagnifyingGlass-wrapper"
  //   glassColor="#c0efff"
  //   color="#e15b64"
  // />
  <Stack>
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
  </Stack>
);

export default Loader;
