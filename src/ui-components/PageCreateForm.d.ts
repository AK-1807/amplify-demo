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
export declare type PageCreateFormInputValues = {
    Title?: string;
    slug?: string;
};
export declare type PageCreateFormValidationValues = {
    Title?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PageCreateFormOverridesProps = {
    PageCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    slug?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PageCreateFormProps = React.PropsWithChildren<{
    overrides?: PageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PageCreateFormInputValues) => PageCreateFormInputValues;
    onSuccess?: (fields: PageCreateFormInputValues) => void;
    onError?: (fields: PageCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PageCreateFormInputValues) => PageCreateFormInputValues;
    onValidate?: PageCreateFormValidationValues;
} & React.CSSProperties>;
export default function PageCreateForm(props: PageCreateFormProps): React.ReactElement;
