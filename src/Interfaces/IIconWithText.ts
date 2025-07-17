import { ReactElement } from "react";
import { IconType } from "react-icons/lib";

export interface IIconWithText{
    icon:ReactElement<IconType>,
    iconClasses:string,
    iconText?:string,
}