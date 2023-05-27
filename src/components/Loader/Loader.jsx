import { Skeleton, Stack } from '@chakra-ui/react';

const Loader = () => (
  <Stack>
    <Skeleton height="20px" />
    <Skeleton height="20px" />
    <Skeleton height="20px" />
  </Stack>
);

export default Loader;
