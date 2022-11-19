// import axios from 'axios'

import { database, firebase, storage } from './firebase'
const fb: any = firebase
export const API = {
  /* #####################################################################
   *
   *      Programmes
   *
   * #####################################################################
   */
  async addProgramme(data: any) {
    // add the document
    const document = database.collection('programmes').doc(data.uid)

    // add the document with ID
    return document.set({
      ...data,
      // eslint-disable-next-line camelcase
      created_at: fb?.firestore.FieldValue.serverTimestamp(),
    })
  },
  getProgramme(data: any) {
    const ref = database.collection('programmes').doc(data.uid)
    return ref
      .get()
      .then((doc: any) => {
        if (!doc.exists) {
          throw new Error('No programme.')
        } else {
          return doc.data()
        }
      })
      .catch((error: any) => {
        throw new Error(error)
      })
  },

  /* #####################################################################
   *
   *      User
   *
   * #####################################################################
   */
  async addEmail(data: any) {
    // add the document
    const collection = database.collection('users')

    // add the document with ID
    const docRef = await collection.add({
      ...data,
      // eslint-disable-next-line camelcase
      created_at: fb?.firestore.FieldValue.serverTimestamp(),
    })
    return docRef.id
  },

  async uploadPdf(data: any) {
    const storageRef = storage.ref()
    const uploadRef = storageRef.child(`pdfs/${data.uid}/${data.filename}.zip`)

    return uploadRef
      .put(data.file)
      .then((snapshot: any) => {
        // const snapshotId = snapshot.metadata.generation
        return snapshot.ref.getDownloadURL().then((downloadURL: any) => {
          const downloadData = {
            url: downloadURL,
          }
          return downloadData
        })
      })
      .catch((error: any) => {
        throw new Error(error)
      })
  },
}
