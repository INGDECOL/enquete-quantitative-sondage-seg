import { ref } from "vue";
import { db, error } from '../firebase/config'
import {  getDocs, collection, query, orderBy, onSnapshot } from 'firebase/firestore'

    const documents = ref ([])
    const getError = ref(null)
    const load = async (collectionName) =>{
        try {
            const docRef =  collection(db, collectionName) // docs to fetch in firebase
            const q = query( docRef, orderBy("createdAt", "desc"))
            const res = onSnapshot(q, ( snap ) =>{
                documents.value = snap.docs.map(doc =>{
                    return {...doc.data(), id : doc.id}
                })
            })
            console.log("Form :", documents.value)
        }catch (err) {
            getError.value = err.message
            console.log(err);
        }
}
const getDocuments = () =>{
    return {documents, getError, load}
}
export default getDocuments
