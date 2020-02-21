import app from '../config/app'
import request from 'supertest'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Marcell',
        email: 'marcell.alves@gmail.com',
        password: '123',
        paswordConfirmation: '123'
      })
      .expect(200)
  })
})
