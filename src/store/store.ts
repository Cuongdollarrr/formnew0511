import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface GeoInfo {
    asn: number;
    ip: string;
    country: string;
    city: string;
    country_code: string;
}

interface FormState {
    isModalOpen: boolean;
    phoneNumber: string;
    geoInfo: GeoInfo | null;
    setModalOpen: (isOpen: boolean) => void;
    setPhoneNumber: (number: string) => void;
    setGeoInfo: (info: GeoInfo) => void;
}

export const useFormStore = create<FormState>()(
    persist(
        (set) => ({
            isModalOpen: true,
            phoneNumber: '',
            geoInfo: null,
            setModalOpen: (isOpen: boolean) => set({ isModalOpen: isOpen }),
            setPhoneNumber: (number: string) => set({ phoneNumber: number }),
            setGeoInfo: (info: GeoInfo) => set({ geoInfo: info })
        }),
        {
            name: 'form-storage',
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => ({
                geoInfo: state.geoInfo
            })
        }
    )
);
