import React, { useState, useMemo, useEffect } from "react";

import Joi from "joi";

import { IntentColor, FormInputEntry } from "@dataxelio/react-ui.utils.prop-types";
import { TextField } from "@dataxelio/react-ui.input.text-field";
import { TextArea } from "@dataxelio/react-ui.input.text-area";
import { CheckBox } from "@dataxelio/react-ui.input.check-box";
import { Select } from "@dataxelio/react-ui.input.select";

export type FormBuilderProps = {
  /**
   * Callback to retrieve input values
   */
  setInputValues?: (inValues: Map<string, string>) => void;
  /**
   * Callback to retrieve input errors
   */
  setInputErrors?: (inResults: Map<string, string>) => void;
  /**
   * Callback to retrieve if form builder having at least one error
   */
  setHavingErrorResult?: (havingErrorRes: boolean) => void;
  /**
   * List of form inputs
   * Make sur to give distinct id and name to each of the input
   */
  inputEntries: FormInputEntry[];
};

export function FormBuilder({
  setInputValues,
  setInputErrors,
  setHavingErrorResult,
  inputEntries,
}: FormBuilderProps) {
  const [valueMap, setValueMap] = useState(new Map<string, string>([]));

  const [stableValueMap, setStableValueMap] = useState(new Map<string, string>([]));

  const [errorMap, setErrorMap] = useState(new Map<string, string>([]));

  const [havingError, setHavingError] = useState<boolean>(true);

  const [touchedIndexes, setTouchedIndexes] = useState(new Set<number>([]));

  const [filterGroupMap, setFilterGroupMap] = useState(new Map<string, string>([]));

  const schema = useMemo(() => {
    const schemaArray: [string, Joi.StringSchema][] = inputEntries.map(entry => [
      entry.name,
      entry.validationRule ?? Joi.string().allow(""),
    ]);
    const schemaMap = new Map<string, Joi.StringSchema>(schemaArray);

    return Joi.object().keys(Object.fromEntries(schemaMap));
  }, [inputEntries, valueMap.size]);

  const stringToBoolean = (value?: string): boolean | undefined => {
    return !value ? undefined : value === "1" || value.toLowerCase() === "true";
  };

  const booleanToString = (value: boolean): string => {
    return String(value);
  };

  useEffect(() => {
    if (!!setInputValues) {
      setInputValues(stableValueMap);
    }
  }, [stableValueMap]);

  useEffect(() => {
    if (!!setInputErrors) {
      setInputErrors(errorMap);
    }
  }, [errorMap]);

  useEffect(() => {
    if (!!setHavingErrorResult) {
      setHavingErrorResult(havingError);
    }
  }, [havingError]);

  return (
    <>
      {inputEntries.map((entry, index) => (
        <React.Fragment key={index}>
          {(!entry.dependencyName ||
            (!!entry.dependencyName &&
              !!valueMap.get(entry.dependencyName) &&
              (!entry.dependencyValue ||
                (!!entry.dependencyValue &&
                  entry.dependencyValue === valueMap.get(entry.dependencyName))))) && (
            <>
              {entry.type === "checkbox" && (
                <CheckBox
                  intent={IntentColor.PRIMARY}
                  aria-label={entry.label}
                  isSelected={
                    stringToBoolean(valueMap.get(entry.name)) ??
                    stringToBoolean(entry.initialValue) ??
                    false
                  }
                  onChange={(isSel: boolean) => {
                    const newValueMap = new Map<string, string>(valueMap);
                    newValueMap.set(entry.name, booleanToString(isSel));
                    setValueMap(newValueMap);
                  }}
                  onBlur={() => {
                    if (!touchedIndexes.has(index)) {
                      const newTouchedIndexes = new Set<number>(touchedIndexes);
                      newTouchedIndexes.add(index);
                      setTouchedIndexes(newTouchedIndexes);
                    }

                    const { value, error } = schema.validate(Object.fromEntries(valueMap), {
                      abortEarly: false,
                      errors: { label: "key", wrap: { label: false } },
                    });

                    const newErrorMap = new Map<string, string>();

                    const errorDetails = error?.details;

                    if (!!errorDetails) {
                      errorDetails.forEach(
                        errorDetail =>
                          !!errorDetail.context?.key &&
                          newErrorMap.set(errorDetail.context?.key, errorDetail.message)
                      );
                    }

                    setErrorMap(newErrorMap);

                    setHavingError(newErrorMap.size > 0);

                    setStableValueMap(new Map<string, string>(Object.entries(value)));
                  }}
                >
                  {entry.label}
                </CheckBox>
              )}
              {entry.type === "select" && !!entry.selectItems && (
                <Select
                  intent={IntentColor.GRAY_DARK}
                  width={entry.selectWidth ?? "w-48"}
                  listBoxRenderSectionLabel={false}
                  label={entry.label}
                  helperText={
                    !!errorMap.get(entry.name) && touchedIndexes.has(index)
                      ? errorMap.get(entry.name)
                      : entry.helperText
                  }
                  helperTextIntent={
                    !!errorMap.get(entry.name) && touchedIndexes.has(index)
                      ? IntentColor.DANGER
                      : IntentColor.BRAND
                  }
                  defaultButtonText={entry.placeholder || entry.name}
                  gapBetweenLabelAndButton="gap-1"
                  outlined
                  listBoxForceItemLowGrayBackgroundAtHoverState
                  syncButtonWithSelectedItem={
                    !entry.dependencyName ||
                    (!!entry.dependencyName &&
                      filterGroupMap.get(entry.name) === valueMap.get(entry.dependencyName))
                  }
                  // selectedListBoxItemLabel={entry.initialValue}
                  listBoxItems={entry.selectItems}
                  listBoxFilter={
                    !!entry.dependencyName
                      ? nodes =>
                          Array.from(nodes).filter(
                            node =>
                              !!node.value &&
                              !!entry.dependencyName &&
                              node.value.filterGroupLabel === valueMap.get(entry.dependencyName)
                          )
                      : undefined
                  }
                  setSelectedListBoxItem={selectedItem => {
                    const oldValue = valueMap.get(entry.name);

                    if (!!entry.dependencyName && !!selectedItem?.filterGroupLabel) {
                      const newFilterGroupMap = new Map<string, string>(filterGroupMap);
                      newFilterGroupMap.set(entry.name, selectedItem.filterGroupLabel);
                      setFilterGroupMap(newFilterGroupMap);
                    }

                    const newValueMap = new Map<string, string>(valueMap);

                    if (!!oldValue) {
                      filterGroupMap.forEach(
                        (value, key) => value === oldValue && newValueMap.set(key, "")
                      );
                    }

                    newValueMap.set(entry.name, selectedItem?.label ?? "");
                    setValueMap(newValueMap);

                    const { value, error } = schema.validate(Object.fromEntries(newValueMap), {
                      abortEarly: false,
                      errors: { label: "key", wrap: { label: false } },
                    });

                    const newErrorMap = new Map<string, string>();

                    const errorDetails = error?.details;

                    if (!!errorDetails) {
                      errorDetails.forEach(
                        errorDetail =>
                          !!errorDetail.context?.key &&
                          newErrorMap.set(errorDetail.context?.key, errorDetail.message)
                      );
                    }

                    setErrorMap(newErrorMap);

                    setHavingError(newErrorMap.size > 0);

                    setStableValueMap(new Map<string, string>(Object.entries(value)));
                  }}
                  onBlur={() => {
                    if (!touchedIndexes.has(index)) {
                      const newTouchedIndexes = new Set<number>(touchedIndexes);
                      newTouchedIndexes.add(index);
                      setTouchedIndexes(newTouchedIndexes);
                    }
                  }}
                />
              )}
              {entry.type !== "checkbox" && entry.type !== "select" && entry.type !== "textarea" && (
                <TextField
                  inputType={entry.type}
                  id={entry.id}
                  name={entry.name}
                  label={entry.label}
                  labelInfo={entry.labelInfo}
                  helperText={
                    !!errorMap.get(entry.name) && touchedIndexes.has(index)
                      ? errorMap.get(entry.name)
                      : entry.helperText
                  }
                  intent={
                    !!errorMap.get(entry.name) && touchedIndexes.has(index)
                      ? IntentColor.DANGER
                      : IntentColor.BRAND
                  }
                  intentAtDefaultState={!!errorMap.get(entry.name) && touchedIndexes.has(index)}
                  placeholder={entry.placeholder}
                  fill
                  value={valueMap.get(entry.name) ?? entry.initialValue ?? ""}
                  onChange={value => {
                    const newValueMap = new Map<string, string>(valueMap);
                    newValueMap.set(entry.name, value);
                    setValueMap(newValueMap);
                  }}
                  onBlur={() => {
                    if (!touchedIndexes.has(index)) {
                      const newTouchedIndexes = new Set<number>(touchedIndexes);
                      newTouchedIndexes.add(index);
                      setTouchedIndexes(newTouchedIndexes);
                    }

                    const { value, error } = schema.validate(Object.fromEntries(valueMap), {
                      abortEarly: false,
                      errors: { label: "key", wrap: { label: false } },
                    });

                    const newErrorMap = new Map<string, string>();

                    const errorDetails = error?.details;

                    if (!!errorDetails) {
                      errorDetails.forEach(
                        errorDetail =>
                          !!errorDetail.context?.key &&
                          newErrorMap.set(errorDetail.context?.key, errorDetail.message)
                      );
                    }

                    setErrorMap(newErrorMap);

                    setHavingError(newErrorMap.size > 0);

                    setStableValueMap(new Map<string, string>(Object.entries(value)));
                  }}
                />
              )}
              {entry.type === "textarea" && (
                <TextArea
                  id={entry.id}
                  name={entry.name}
                  label={entry.label}
                  labelInfo={entry.labelInfo}
                  helperText={
                    !!errorMap.get(entry.name) && touchedIndexes.has(index)
                      ? errorMap.get(entry.name)
                      : entry.helperText
                  }
                  intent={
                    !!errorMap.get(entry.name) && touchedIndexes.has(index)
                      ? IntentColor.DANGER
                      : IntentColor.BRAND
                  }
                  intentAtDefaultState={!!errorMap.get(entry.name) && touchedIndexes.has(index)}
                  placeholder={entry.placeholder}
                  fill
                  value={valueMap.get(entry.name) ?? entry.initialValue ?? ""}
                  onChange={value => {
                    const newValueMap = new Map<string, string>(valueMap);
                    newValueMap.set(entry.name, value);
                    setValueMap(newValueMap);
                  }}
                  onBlur={() => {
                    if (!touchedIndexes.has(index)) {
                      const newTouchedIndexes = new Set<number>(touchedIndexes);
                      newTouchedIndexes.add(index);
                      setTouchedIndexes(newTouchedIndexes);
                    }

                    const { value, error } = schema.validate(Object.fromEntries(valueMap), {
                      abortEarly: false,
                      errors: { label: "key", wrap: { label: false } },
                    });

                    const newErrorMap = new Map<string, string>();

                    const errorDetails = error?.details;

                    if (!!errorDetails) {
                      errorDetails.forEach(
                        errorDetail =>
                          !!errorDetail.context?.key &&
                          newErrorMap.set(errorDetail.context?.key, errorDetail.message)
                      );
                    }

                    setErrorMap(newErrorMap);

                    setHavingError(newErrorMap.size > 0);

                    setStableValueMap(new Map<string, string>(Object.entries(value)));
                  }}
                />
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </>
  );
}
