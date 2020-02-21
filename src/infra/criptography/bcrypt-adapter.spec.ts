import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const salt = 12
    const sut = new BcryptAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    const valueToHash = 'any_value'
    await sut.encrypt(valueToHash)
    expect(hashSpy).toHaveBeenLastCalledWith(valueToHash, salt)
  })
})
