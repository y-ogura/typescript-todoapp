import { User } from '@/types/models'

/**
 * State
 *
 * @export
 * @interface S
 */
export interface S {
  user: User
}

/**
 * Actions
 *
 * @export
 * @interface A
 */
export interface A {
  signIn: { email: string, password: string}
}

/**
 * RootActions
 *
 * @export
 * @interface RA
 */
export interface RA {
  'user/signIn': A['signIn']
}

/**
 * Getters
 *
 * @export
 * @interface G
 */
export interface G {
  self: User
}

/**
 * RootGetters
 *
 * @export
 * @interface RG
 */
export interface RG {
  'user/self': G['self']
}

/**
 * Mutations
 *
 * @export
 * @interface M
 */
export interface M {
  setUser: { user: User }
}
