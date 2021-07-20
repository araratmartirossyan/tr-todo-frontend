import { useState } from 'react'

export type ErrorResult = {
  error: boolean
  message: string
}

export const useValidate = () => {
  const defaultErrorObject = {
    error: false,
    message: '',
  }
  const [error, setError] = useState<ErrorResult>({
    error: false,
    message: '',
  })

  const validate = (value: string) => {
    if (value.length < 2) {
      const errorObject = {
        error: true,
        message: 'Task message must have at least 2 characters',
      }
      setError(errorObject)
      return errorObject
    }

    setError({ ...defaultErrorObject })
    return defaultErrorObject
  }

  return {
    error,
    validate,
  }
}
