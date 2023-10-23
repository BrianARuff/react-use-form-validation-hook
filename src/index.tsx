import { useState } from 'react'

export type ValidationRules<T> = {
  [K in keyof T]: (value: T[K]) => true | string
}

export const useFormValidation = <T extends Record<string, any>>(
  initialState: T,
  validationRules: ValidationRules<T>
): [T, Partial<T>] => {
  const [errors, setErrors] = useState<Partial<T>>({})
  const [state] = useState<T>(initialState)

  const handler: ProxyHandler<T> = {
    set(target, property, value) {
      if (typeof property === 'string' && validationRules[property]) {
        const validationError = validationRules[property](value as any)
        setErrors((prev) => ({ ...prev, [property]: validationError }))
      }
      target[property as keyof T] = value as any
      return true
    }
  }

  const proxyState = new Proxy(state, handler)

  return [proxyState, errors]
}
