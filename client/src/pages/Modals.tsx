import ReceiveModal from '@components/Account/ReceiveModal';
import { MODALS } from '@helpers/types';
import useModal from '@hooks/useModal';


export default function Modals() {
  const { currentModal } = useModal();

  return (
    <>
      {currentModal === MODALS.RECEIVE && (
        <ReceiveModal />
      )}
    </>
  );
};
