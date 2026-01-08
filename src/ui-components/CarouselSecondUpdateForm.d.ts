/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { CarouselSecond } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CarouselSecondUpdateFormInputValues = {
    Slide?: string;
};
export declare type CarouselSecondUpdateFormValidationValues = {
    Slide?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarouselSecondUpdateFormOverridesProps = {
    CarouselSecondUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Slide?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type CarouselSecondUpdateFormProps = React.PropsWithChildren<{
    overrides?: CarouselSecondUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    carouselSecond?: CarouselSecond;
    onSubmit?: (fields: CarouselSecondUpdateFormInputValues) => CarouselSecondUpdateFormInputValues;
    onSuccess?: (fields: CarouselSecondUpdateFormInputValues) => void;
    onError?: (fields: CarouselSecondUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarouselSecondUpdateFormInputValues) => CarouselSecondUpdateFormInputValues;
    onValidate?: CarouselSecondUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CarouselSecondUpdateForm(props: CarouselSecondUpdateFormProps): React.ReactElement;
