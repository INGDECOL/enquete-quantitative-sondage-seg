import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/enquetes/CreateEnquete.vue'
import Approvisionnement from '../views/enquetes/CreateApprovisionnement.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/admin/Signup.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import EnqueteList from '../views/enquetes/EnqueteList.vue'
import { db, auth } from "../firebase/config"
import getUser from "../controllers/getUser"
import { ref } from "vue";


//auth guard
const requireAuth = ( to, from, next) =>{
  let user = auth.currentUser
  if(!user){
    next({ name: 'Home'})
  } else {
    next()
  }
  //console.log(" current : ", user.accessToken)
}

const requireAuthAdmin = async ( to, from, next) =>{
  const { findUser, error, user } = getUser()
  let _user = auth.currentUser
  //console.log("userssss : ", _user.uid)
  if(_user) {
      await findUser(_user.uid)

        console.log("requireAuthAdmin : ", user.value.fonction)
      if(user.value.fonction != 'Administrateur'){
        alert("Vous n'êtes pas autorisé à aller sur cette page ")
        next({ name: 'Home'})
      } else {
        next()
      }
    }else {
      next({ name: 'Home'})
    }

}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: Dashboard,
    beforeEnter: requireAuthAdmin
  },
  {
    path: '/enquetes/create/:token/:id?',
    name: 'Create',
    component: Create,
    beforeEnter: requireAuth

  },
  {
    path: '/enquetes/approvisionnement/:token/:docId/:id?',
    name: 'Approvisionnement',
    component: Approvisionnement,
    beforeEnter: requireAuth

  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/enqueteList/:token?',
    name: 'EnqueteList',
    component: EnqueteList,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
