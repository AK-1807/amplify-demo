/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
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
export declare type CarouselSecondCreateFormInputValues = {
    Slide?: string;
};
export declare type CarouselSecondCreateFormValidationValues = {
    Slide?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarouselSecondCreateFormOverridesProps = {
    CarouselSecondCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Slide?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type CarouselSecondCreateFormProps = React.PropsWithChildren<{
    overrides?: CarouselSecondCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CarouselSecondCreateFormInputValues) => CarouselSecondCreateFormInputValues;
    onSuccess?: (fields: CarouselSecondCreateFormInputValues) => void;
    onError?: (fields: CarouselSecondCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarouselSecondCreateFormInputValues) => CarouselSecondCreateFormInputValues;
    onValidate?: CarouselSecondCreateFormValidationValues;
} & React.CSSProperties>;
export default function CarouselSecondCreateForm(props: CarouselSecondCreateFormProps): React.ReactElement;
