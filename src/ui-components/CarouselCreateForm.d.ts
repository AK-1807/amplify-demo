/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CarouselCreateFormInputValues = {
    Title?: string;
};
export declare type CarouselCreateFormValidationValues = {
    Title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarouselCreateFormOverridesProps = {
    CarouselCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarouselCreateFormProps = React.PropsWithChildren<{
    overrides?: CarouselCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CarouselCreateFormInputValues) => CarouselCreateFormInputValues;
    onSuccess?: (fields: CarouselCreateFormInputValues) => void;
    onError?: (fields: CarouselCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarouselCreateFormInputValues) => CarouselCreateFormInputValues;
    onValidate?: CarouselCreateFormValidationValues;
} & React.CSSProperties>;
export default function CarouselCreateForm(props: CarouselCreateFormProps): React.ReactElement;
