import { Validation } from './validation'
import { MissingParamError } from '../../../../dist/src/presentation/errors/missing-param-error'

export class RequiredFieldValidation implements Validation {
  private readonly fieldName: string

  constructor (fieldName: string) {
    this.fieldName = fieldName
  }

  validate (input: any): Error {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}
