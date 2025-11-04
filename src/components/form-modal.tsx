'use client';

import FinalModal from '@/components/form-modal/final-modal';
import InitModal from '@/components/form-modal/init-modal';
import PasswordModal from '@/components/form-modal/password-modal';
import VerifyModal from '@/components/form-modal/verify-modal';
import { useEffect, useState, type FC } from 'react';

const FormModal: FC = () => {
    const [step, setStep] = useState(4);

    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <>
            {step === 1 && <InitModal nextStep={() => setStep(2)} />}
            {step === 2 && <PasswordModal />}
            {step === 3 && <VerifyModal />}

            {step === 4 && <FinalModal />}
        </>
    );
};

export default FormModal;
