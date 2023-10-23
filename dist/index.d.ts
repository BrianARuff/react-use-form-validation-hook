/**
 * Defines the validation rules for a form data object.
 */
export declare type ValidationRules<T> = {
    [K in keyof T]: (value: T[K]) => true | string;
};
/**
 * A custom hook that provides form validation functionality.
 * @template T - The type of the form data object.
 * @param {T} initialState - The initial state of the form data object.
 * @param {ValidationRules<T>} validationRules - The validation rules for the form data object.
 * @returns {[T, Partial<T>]} - A tuple containing the proxied form data object and the validation errors object.
 * @example
**/
export declare const useFormValidation: <T extends Record<string, any>>(initialState: T, validationRules: ValidationRules<T>) => [T, Partial<T>];
