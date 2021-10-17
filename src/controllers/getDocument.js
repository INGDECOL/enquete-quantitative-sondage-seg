import { ref } from "vue"
import { db } from '../firebase/config'
import { doc, getDoc } from 'firebase/firestore'
const getDocument = (collection, id) =>{

    const document = ref (null)
    const error = ref(null)
    const load = async () =>{
        try {
            // local fetching data
            // let res = await fetch('http://localhost:3000/posts/' + id)
            //
            // post.value = await res.json()
            //using firebase
            const docRef = doc( db, collection, id)
            const res = await getDoc(docRef)
            document.value = {...res.data(), id: id}

            if(!res.exists()) {
                throw Error("That document doesn't exist")
            }

        }
        catch (err) {
        error.value = err.message
        }
    }
    return {document, error, load}
}
export default getDocument
