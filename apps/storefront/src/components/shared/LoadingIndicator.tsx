import { Spinner } from '@chakra-ui/react'
import { useIsFetching } from '@tanstack/react-query'

const LoadingIndicator = () => {
  const isFetching = useIsFetching()

  return isFetching ? (
    <Spinner
      position="fixed"
      bottom={10}
      right={10}
    />
  ) : null
}

export default LoadingIndicator
