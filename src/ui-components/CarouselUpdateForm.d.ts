/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Carousel } from "../API.ts";
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
export declare type CarouselUpdateFormInputValues = {
    Title?: string;
};
export declare type CarouselUpdateFormValidationValues = {
    Title?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarouselUpdateFormOverridesProps = {
    CarouselUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarouselUpdateFormProps = React.PropsWithChildren<{
    overrides?: CarouselUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    carousel?: Carousel;
    onSubmit?: (fields: CarouselUpdateFormInputValues) => CarouselUpdateFormInputValues;
    onSuccess?: (fields: CarouselUpdateFormInputValues) => void;
    onError?: (fields: CarouselUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarouselUpdateFormInputValues) => CarouselUpdateFormInputValues;
    onValidate?: CarouselUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CarouselUpdateForm(props: CarouselUpdateFormProps): React.ReactElement;
