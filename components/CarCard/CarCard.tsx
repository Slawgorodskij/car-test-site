'use client'
import Image from 'next/image'
import {ICarCard} from "@/components/CarCard/interface";
import {calculateCarRent, generateCarImageUrl} from "@/utils";
import {Button} from "@/components/Button";
import {useState} from "react";
import {CarDetails} from "@/components/CarDetails";


export const CarCard = ({car}: ICarCard) => {
    const {city_mpg, year, make, model, transmission, drive} = car;
    const [isOpen, setIsOpen] = useState(false)
    const carRent = calculateCarRent(city_mpg, year);
    return (
        <div className={'car-card group'}>
            <div className={'car-card__content'}>
                <h2 className={'car-card__content-title'}>
                    {make} {model}
                </h2>
            </div>
            <p className={'flex mt-6 text-[32px] font-extrabold'}>
                <span className={'self-start text-[14px] font-semibold'}>
                    $
                </span>
                {carRent}
                <span className={'self-end text-[14px] font-medium'}>
                    /день
                </span>
            </p>

            <div className={'relative w-full h-40 my-3 object-contain'}>
                <Image
                    src={generateCarImageUrl(car)}
                    fill
                    priority
                    className={'object-contain'}
                    alt={'фото авто'}/>
            </div>

            <div className={'relative flex w-full mt-2'}>
                <div className={'flex group-hover:invisible w-full justify-between text-gray'}>
                    <div className={'flex flex-col justify-center items-center gap-2'}>
                        <Image
                            src={'/steering-wheel.svg'}
                            width={20}
                            height={20}
                            alt={'Рулевое колесо'}
                        />
                        <p className={'text-[14px]'}>
                            {transmission === 'a'
                                ? 'Автоматическая'
                                : 'Механическая'}
                        </p>
                    </div>

                    <div className={'flex flex-col justify-center items-center gap-2'}>
                        <Image
                            src={'/tire.svg'}
                            width={20}
                            height={20}
                            alt={'шина'}
                        />
                        <p className={'text-[14px]'}>
                            {drive.toUpperCase()}
                        </p>
                    </div>

                    <div className={'flex flex-col justify-center items-center gap-2'}>
                        <Image
                            src={'/gas.svg'}
                            width={20}
                            height={20}
                            alt={'азс'}
                        />
                        <p className={'text-[14px]'}>
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>

                <div className={'car-card__btn-container'}>
                    <Button
                        title={'Посмотреть'}
                        containerStyles={'w-full py-[16px] rounded-full bg-primary-blue'}
                        textStyles={'text-white text-[14px] leading-[17px] font-bold'}
                        rightIcon={'/right-arrow.svg'}
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <CarDetails
                car={car}
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
            />
        </div>
    );
};