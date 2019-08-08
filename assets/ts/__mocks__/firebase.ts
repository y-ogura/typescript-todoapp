// mock firebase.ts
export default class Firebase {
  constructor() {
    console.log('Mock Firebase: constructor was called')
  }
  signIn(email: string, password: string) {
    const user: Object = {
      uid: '1',
      email: 'test@example.com'
    }
    return Promise.resolve({ user: user })
  }
}
