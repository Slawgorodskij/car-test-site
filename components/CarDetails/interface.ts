import {ICar} from "@/components/CarCard/interface";


export interface ICarDetails {
    isOpen: boolean;
    closeModal: () => void;
    car: ICar;
}