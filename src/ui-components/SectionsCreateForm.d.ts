/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SectionsCreateFormInputValues = {
    type?: string;
    data?: string;
};
export declare type SectionsCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    data?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SectionsCreateFormOverridesProps = {
    SectionsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    data?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type SectionsCreateFormProps = React.PropsWithChildren<{
    overrides?: SectionsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SectionsCreateFormInputValues) => SectionsCreateFormInputValues;
    onSuccess?: (fields: SectionsCreateFormInputValues) => void;
    onError?: (fields: SectionsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SectionsCreateFormInputValues) => SectionsCreateFormInputValues;
    onValidate?: SectionsCreateFormValidationValues;
} & React.CSSProperties>;
export default function SectionsCreateForm(props: SectionsCreateFormProps): React.ReactElement;
