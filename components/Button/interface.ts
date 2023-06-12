import {MouseEventHandler} from "react";

export interface IButton {
    title: string;
    btnType?: 'button' | 'submit';
    containerStyles?: string;
    textStyles?: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    isDisabled?: boolean;
}