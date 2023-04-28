import React from 'react';
import { Oval } from 'react-loader-spinner'

const LoadingSpinner = () => {
  return (
    <Oval
    height={100}
    width={100}
    color="#6E5FD2"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="#6E5FD2"
    strokeWidth={2}
    strokeWidthSecondary={2}
  />
  )
}

export default LoadingSpinner
