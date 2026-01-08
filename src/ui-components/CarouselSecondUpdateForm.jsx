/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextAreaField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getCarouselSecond } from "../graphql/queries";
import { updateCarouselSecond } from "../graphql/mutations";
const client = generateClient();
export default function CarouselSecondUpdateForm(props) {
  const {
    id: idProp,
    carouselSecond: carouselSecondModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Slide: "",
  };
  const [Slide, setSlide] = React.useState(initialValues.Slide);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = carouselSecondRecord
      ? { ...initialValues, ...carouselSecondRecord }
      : initialValues;
    setSlide(
      typeof cleanValues.Slide === "string" || cleanValues.Slide === null
        ? cleanValues.Slide
        : JSON.stringify(cleanValues.Slide)
    );
    setErrors({});
  };
  const [carouselSecondRecord, setCarouselSecondRecord] = React.useState(
    carouselSecondModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCarouselSecond.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCarouselSecond
        : carouselSecondModelProp;
      setCarouselSecondRecord(record);
    };
    queryData();
  }, [idProp, carouselSecondModelProp]);
  React.useEffect(resetStateValues, [carouselSecondRecord]);
  const validations = {
    Slide: [{ type: "JSON" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Slide: Slide ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateCarouselSecond.replaceAll("__typename", ""),
            variables: {
              input: {
                id: carouselSecondRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CarouselSecondUpdateForm")}
      {...rest}
    >
      <TextAreaField
        label="Slide"
        isRequired={false}
        isReadOnly={false}
        value={Slide}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Slide: value,
            };
            const result = onChange(modelFields);
            value = result?.Slide ?? value;
          }
          if (errors.Slide?.hasError) {
            runValidationTasks("Slide", value);
          }
          setSlide(value);
        }}
        onBlur={() => runValidationTasks("Slide", Slide)}
        errorMessage={errors.Slide?.errorMessage}
        hasError={errors.Slide?.hasError}
        {...getOverrideProps(overrides, "Slide")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || carouselSecondModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || carouselSecondModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
