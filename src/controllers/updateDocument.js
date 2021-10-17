import { ref } from "vue";
//import { useRouter } from 'vue-router'
import { db } from "../firebase/config"
import { collection, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from "firebase/firestore";


    const updateError = ref(null)
    //const router = useRouter()

    const update = async (collection, document) =>{
        try {
            const docRef = doc( db, collection, document.id)
            const res = await updateDoc(docRef, document)
            //router.push({name : "EnqueteList"})
        }
        catch (err) {
        error.value = err.message
        }
    }

const updateDocument = () =>{
    return { updateError, update}
}
export default updateDocument
