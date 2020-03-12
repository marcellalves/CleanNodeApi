import { Controller, HttpRequest, HttpResponse } from '../../protocols'
import { badRequest } from '../../../../dist/src/presentation/helpers/http-helper'
import { MissingParamError } from '../../../../dist/src/presentation/errors/missing-param-error'

export class LoginController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.email) {
      return new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
    }
    if (!httpRequest.body.pasword) {
      return new Promise(resolve => resolve(badRequest(new MissingParamError('password'))))
    }
  }
}
