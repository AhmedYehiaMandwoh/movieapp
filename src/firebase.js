// import firebase from 'firebase'
// const config = {
//   apiKey: "AIzaSyAqMd8foMxH374v9FJSyAg8inN8rHGIviI",
//   authDomain: "interviewapp-78f97.firebaseapp.com",
//   projectId: "interviewapp-78f97",
//   storageBucket: "interviewapp-78f97.appspot.com",
//   messagingSenderId: "593856338214",
//   appId: "1:593856338214:web:3a3767f80febba61cb49e7",
//   measurementId: "G-6WMYMQ40YR"
// }

// const firebaseApp = firebase.initializeApp(config)




// export const getUser = async id => {
//   const user = await usersCollection.doc(id).get()
//   return user.exists ? user.data() : null
// }

// export const updateUser = (id, user) => {
//   return usersCollection.doc(id).update(user)
// }

// export const deleteUser = id => {
//   return usersCollection.doc(id).delete()
// }

// export const useLoadUsers = () => {
//   const users = ref([])
//   const close = usersCollection.onSnapshot(snapshot => {
//     users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
//   })
//   onUnmounted(close)
//   return users
// }
