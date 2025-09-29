import React from 'react';
import { Confirmation, useConfirmation } from '@alfalab/core-components/confirmation';

const ConfirmationBase: React.FC = () => {
  const {
    confirmationState,
    confirmationScreen,
    confirmationBlockSmsRetry,
    setConfirmationState,
    setConfirmationScreen,
  } = useConfirmation();

  const handleInputFinished = () => {
    setTimeout(() => {
      setConfirmationState('CODE_ERROR');
    }, 1000);
  };

  const handleSmsRetryClick = () => {
    setTimeout(() => {
      setConfirmationState('INITIAL');
    }, 1000);
  };

  return (
    <Confirmation
      screen={confirmationScreen}
      state={confirmationState}
      blockSmsRetry={confirmationBlockSmsRetry}
      countdownDuration={10000}
      onChangeState={setConfirmationState}
      onChangeScreen={setConfirmationScreen}
      onInputFinished={handleInputFinished}
      onSmsRetryClick={handleSmsRetryClick}
      phone='+7 ··· ··· 07 24'
    />
  );
};

export default ConfirmationBase;
