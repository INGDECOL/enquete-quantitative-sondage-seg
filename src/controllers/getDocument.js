import { ref } from "vue"
import { db } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'
const getDocument = (collectionName, id) =>{

    const document = ref (null)
    const getError = ref(null)
    const load = async () =>{
        try {
            console.log("Loading...") // local fetching data
            const docRef = doc( db, collectionName, id)
            const res =  await getDoc(docRef)
            console.log("query ok")
            if(res.exists()){
                console.log("REs data : ", res.data())
                document.value = {...res.data(), id: id}
                console.log("document data : ", document.value)

            }else {
                console.log("Errorrrrrrr : :::::::::::::::::")
                throw Error("That document doesn't exist")

            }



        }
        catch (err) {
            getError.value = err.message
            console.log("Error occured : ", getError.value)
        }
    }
    return {document, getError, load}
}
export default getDocument
