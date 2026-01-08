/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Sections } from "../API.ts";
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
export declare type SectionsUpdateFormInputValues = {
    type?: string;
    data?: string;
};
export declare type SectionsUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    data?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SectionsUpdateFormOverridesProps = {
    SectionsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    data?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type SectionsUpdateFormProps = React.PropsWithChildren<{
    overrides?: SectionsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sections?: Sections;
    onSubmit?: (fields: SectionsUpdateFormInputValues) => SectionsUpdateFormInputValues;
    onSuccess?: (fields: SectionsUpdateFormInputValues) => void;
    onError?: (fields: SectionsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SectionsUpdateFormInputValues) => SectionsUpdateFormInputValues;
    onValidate?: SectionsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SectionsUpdateForm(props: SectionsUpdateFormProps): React.ReactElement;
