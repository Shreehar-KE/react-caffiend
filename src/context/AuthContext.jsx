import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useState, useEffect, useContext, createContext } from "react";

import { auth, db } from "../../firebase"
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider(props) {
  const { children } = props
  const [globalUser, setGlobalUser] = useState(null)
  const [globalData, setGlobalData] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    setGlobalUser(null)
    setGlobalData(null)
    return signOut(auth)
  }

  const value = { globalUser, globalData, setGlobalData, isLoading, signUp, login, logout }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('CURRENT USER: ', user)
      setGlobalUser(user)
      if (!user) {
        console.log('No active user')
        return user
      }

      try {
        setIsLoading(true)

        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)

        let firebaseData = {}
        if (docSnap.exists()) {
          console.log('Found user data')
          firebaseData = docSnap.data()
        }

        setGlobalData(firebaseData)

      } catch (error) {
        console.log(error.message)
      } finally {
        setIsLoading(false)
      }

    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}