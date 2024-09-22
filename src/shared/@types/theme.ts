export type ColorValue = `#${string}`;
export type ColorSteps = Record<"1" | "2" | "3" | "4" | "5" | "6", ColorValue>;

interface ColorStepTypes {
  gray: ColorSteps;
}

interface ColorValueTypes {
  main: ColorValue;
  sub: ColorValue;
  back: ColorValue;
  black: ColorValue;
  white: ColorValue;
  error: ColorValue;
}

export type ColorTypes = ColorStepTypes & ColorValueTypes;
