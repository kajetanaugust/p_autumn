export const handleInputValidation = (
  input: HTMLInputElement,
  requiredMessage: string,
  errorMessage: string
): void => {
  if (input.validity.valueMissing) {
    input.setCustomValidity(requiredMessage)
  } else if (input.validity.patternMismatch) {
    input.setCustomValidity(errorMessage)
  } else {
    input.setCustomValidity(errorMessage)
  }
}

export const clearValidation = (input: HTMLInputElement): void => {
  input.setCustomValidity('')
}
