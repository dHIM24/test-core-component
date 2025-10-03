import React from 'react';
import { UniversalModal } from '@alfalab/core-components/universal-modal';
import { HeaderDesktop } from '@alfalab/core-components/universal-modal/desktop';
import ConfirmationBase from './ConfirmationBase';

const ConfirmationModal: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div style={{ padding: '16px' }}>
      <button onClick={handleOpenModal}>Открыть модальное окно</button>

      <UniversalModal open={isOpen} onClose={handleCloseModal} width={768} disableFocusLock={true}>
        <HeaderDesktop hasCloser={true} onClose={handleCloseModal} title='Подтверждение' />
        <div style={{ padding: '16px' }}>
          <ConfirmationBase />
        </div>
      </UniversalModal>
    </div>
  );
};

export default ConfirmationModal;
