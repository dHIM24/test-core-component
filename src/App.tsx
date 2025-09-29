import React from 'react';
import { Switch } from '@alfalab/core-components/switch';
import ConfirmationModal from './ConfirmationModal';
import ConfirmationDefault from './ConfirmationDefault';
import { BlockInfo } from './BlockInfo';

export const App = () => {
  const [isModal, setIsModal] = React.useState(false);

  return (
    <div>
      <h2>Confirmation Component</h2>
      <Switch checked={isModal} onChange={() => setIsModal(!isModal)} label={isModal ? 'В модальном окне' : 'Стандартный'} />

      <BlockInfo />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '50vh',
        }}>
        {isModal ? <ConfirmationModal /> : <ConfirmationDefault />}
      </div>
    </div>
  );
};
