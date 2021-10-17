import { ref } from "vue";
import { db, error } from '../firebase/config'
import {  getDocs, collection, query, orderBy, onSnapshot } from 'firebase/firestore'

    const documents = ref ([ ])
    //const error = ref(null)
    const load = async (collection) =>{
        try {
            const docRef =  collection(db, collection) // docs to fetch in firebase
            const q = query( docRef, orderBy("createdAt", "desc"))
            const res = onSnapshot(q, ( snap ) =>{
                documents.value = snap.docs.map(doc =>{
                    return {...doc.data(), id : doc.id}
                })
            })

        }catch (err) {
            error.value = err.message
            console.log(err);
        }
}
const getDocuments = () =>{
    return {documents, error, load}
}
export default getDocuments
