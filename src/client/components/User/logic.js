import ed from '../../encrypted-dev-sdk'

const _errorHandler = (e, operation) => {
  console.log(`Failed to ${operation} with`, e, e.response && e.response.data)
  const errorMsg = (e.response && e.response.data.readableMessage) || e.message
  return { error: errorMsg }
}

const signUp = async (username, password) => {
  try {
    const user = await ed.signUp(username, password)
    return { user }
  } catch (e) {
    return _errorHandler(e, 'sign up')
  }
}

const signOut = async () => {
  try {
    const user = await ed.signOut()
    return { user }
  } catch (e) {
    return _errorHandler(e, 'sign out')
  }
}

const signIn = async (username, password) => {
  try {
    const user = await ed.signIn(username, password)
    return { user }
  } catch (e) {
    return _errorHandler(e, 'sign in')
  }
}

const isUserSignedIn = async () => {
  try {
    return ed.isUserSignedIn()
  } catch (e) {
    console.log(e)
    return false
  }
}

export default {
  signUp,
  signOut,
  signIn,
  isUserSignedIn,
}
