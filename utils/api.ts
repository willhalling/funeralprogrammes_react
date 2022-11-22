// import axios from 'axios'

import { doc, getDoc } from 'firebase/firestore'

import { firestore } from './firebase'

export const API = {
  /* #####################################################################
   *
   *      Programmes
   *
   * #####################################################################
   */
  // async addProgramme(data: any) {
  //   // add the document
  //   const document = database.collection('programmes').doc(data.uid)

  //   // add the document with ID
  //   return document.set({
  //     ...data,
  //     // eslint-disable-next-line camelcase
  //     created_at: fb?.firestore.FieldValue.serverTimestamp(),
  //   })
  // },
  getProgramme(data: any) {
    // const ref = database.collection('programmes').doc(data.uid)
    const ref = doc(firestore, `programmes/${data.uid}`)
    return getDoc(ref)
      .then((doc: any) => {
        if (!doc.exists) {
          throw new Error('No programme.')
        } else {
          const data = doc.data()
          return data
        }
      })
      .catch((error: any) => {
        throw new Error(error)
      })
  },
}
