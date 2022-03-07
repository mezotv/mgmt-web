import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { addPartnerModalAtom } from '../atoms/modalAtoms';

const AddPartnerModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(addPartnerModalAtom);

  return (
    <div className='add-partner-modal-container'>
      <div className='add-partner-modal'>
        <div className='add-partner-modal-head'>
          <h2>Add partner</h2>
          <i className='bx bx-x'></i>
        </div>
      </div>
    </div>
  );
};

export default AddPartnerModal;
