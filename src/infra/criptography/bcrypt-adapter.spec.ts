import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return new Promise(resolve => resolve('hash'))
  }
}))

const salt = 12
const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    const valueToHash = 'any_value'
    await sut.encrypt(valueToHash)
    expect(hashSpy).toHaveBeenLastCalledWith(valueToHash, salt)
  })

  test('Should return a hash on success', async () => {
    const sut = makeSut()
    const valueToHash = 'any_value'
    const hash = await sut.encrypt(valueToHash)
    expect(hash).toBe('hash')
  })
})
