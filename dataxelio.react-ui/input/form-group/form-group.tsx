import React from "react";

import {
  LineHeightType,
  FontSizeType,
  FontWeightType,
  LetterSpacingType,
  IntentColor,
} from "@dataxelio/react-ui.utils.prop-types";

import { typographyStyleBuilder } from "@dataxelio/react-ui.utils.typography-style-builder";
import { Text } from "@dataxelio/react-ui.element.text";

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  labelFor: string;
  labelInfo?: string;
  helperText?: string;
  intent?: IntentColor;

  // Typography Style
  fontHeight?: LineHeightType;
  fontSize?: FontSizeType;
  fontWeight?: FontWeightType;
  letterSpacing?: LetterSpacingType;
}

export const FormGroup = ({
  label,
  labelFor,
  labelInfo,
  helperText,
  intent,

  fontHeight,
  fontSize,
  fontWeight,
  letterSpacing,

  className: fClassName,
  children,
  ...rest
}: FormGroupProps) => {
  const defaultFontSize = fontSize ?? "text-sm";
  return (
    <div className={`flex flex-col justify-start space-y-1 ${fClassName}`} {...rest}>
      <label
        className={`flex-none text-gray-900 dark:text-gray-100 ${typographyStyleBuilder({
          fontSize: defaultFontSize,
          fontWeight,
          letterSpacing,
          fontHeight,
        })} `}
        htmlFor={labelFor}
      >
        {label}
        {labelInfo && <span className="text-gray-600 dark:text-gray-300">{` ${labelInfo}`}</span>}
      </label>
      {children}
      {helperText && <Text tText={helperText} fontSize="text-xs" intentColor={intent} />}
    </div>
  );
};
