export declare type ValidationRules<T> = {
    [K in keyof T]: (value: T[K]) => true | string;
};
export declare const useFormValidation: <T extends Record<string, any>>(initialState: T, validationRules: ValidationRules<T>) => [T, Partial<T>];
