'use client'
import Image from 'next/image'
import {IButton} from "@/components/Button/interface";

export const Button = ({title, btnType, containerStyles, textStyles, rightIcon, handleClick, isDisabled}: IButton) => {
    return (
        <button
            disabled={isDisabled}
            type={btnType || 'button'}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && (
                <div className={'relative w-6 h-6'}>
                    <Image
                        src={rightIcon}
                        fill
                        className={'object-contain'}
                        alt={'стрелка'}/>
                </div>
            )}
        </button>
    );
};