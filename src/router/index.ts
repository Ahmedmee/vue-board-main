import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Forms from "../views/Forms.vue";
import Tables from "../views/Tables.vue";
import UIElements from "../views/UIElements.vue";
import Login from "../views/Login.vue";
import Modal from "../views/Modal.vue";
import Chart from "../views/ChartView.vue";
import Blank from "../views/BlankView.vue";
import NotFound from "../views/NotFound.vue";
import EditProfile from "../views/EditProfile.vue"
import TablesWhereHouse from "../view2/TablesWhereHouse.vue" 
import LoginWhereHouse from "../view2/LoginWhereHouse.vue"
import FormsWhereHouse from "../view2/FormsWhereHouse.vue"
import ChartViewWhereHouse from "../view2/ChartViewWhereHouse.vue"
import FormsUser from "../userview3/FormsUser.vue"
import Track from "../userview3/Track.vue"
import TablesUser from "../userview3/TablesUser.vue"
import writeReview from "../userview3/writeReview.vue"
import ChartViewUser from "../userview3/ChartViewUser.vue"
import TablesAgent from "../Agentview4/TablesAgent.vue"
import TrackAgent from "../Agentview4/TrackAgent.vue"
import ChartViewAgent from "../Agentview4/ChartViewAgent.vue"
import writeReviewAgent from "../Agentview4/writeReviewAgent.vue"
import WhereHouseEditProfile from "../view2/WhereHouseEditProfile.vue"
import AgentEditProfile from "../Agentview4/AgentEditProfile.vue"
import UserEditProfile from "../userview3/UserEditProfile.vue"
import RepresentiveEditProfile from "../Representiveview5/RepresentiveEditProfile.vue"
import ChartViewRepresentive from "../Representiveview5/ChartViewRepresentive.vue"
import TablesRepresentive from "../Representiveview5/TablesRepresentive.vue"
import TrackRepresentive from "../Representiveview5/TrackRepresentive.vue"
import writeReviewrepresentive from '../Representiveview5/writeReviewrepresentive.vue'




const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  

  {
    path: "/ChartViewUser",
    name: "ChartViewUser",
    component:ChartViewUser 
    
  },
  

  {
    path: "/TrackRepresentive",
    name: "TrackRepresentive",
    component:TrackRepresentive 
    
  },
  {
    path: "/TablesRepresentive",
    name: "TablesRepresentive",
    component:TablesRepresentive 
    
  },
  
  {
    path: "/ChartViewRepresentive",
    name: "ChartViewRepresentive",
    component:ChartViewRepresentive 
    
  },
  
  {
    path: "/writeReviewrepresentive",
    name: "writeReviewrepresentive",
    component:writeReviewrepresentive 
    
  },
  
  
  {
    path: "/WhereHouseEditProfile",
    name: "WhereHouseEditProfile",
    component:WhereHouseEditProfile  
    
  },

  {
    path: "/AgentEditProfile",
    name: "AgentEditProfile",
    component:AgentEditProfile 
    
  },


  {
    path: "/UserEditProfile",
    name: "UserEditProfile",
    component:UserEditProfile 
    
  },


  {
    path: "/RepresentiveEditProfile",
    name: "RepresentiveEditProfile",
    component:RepresentiveEditProfile
    
  },


  {
    path: "/TablesAgent",
    name: "TablesAgent",
    component:TablesAgent , 
    
  },
  {
    path: "/TrackAgent",
    name: "TrackAgent",
    component:TrackAgent , 
    
  },
  {
    path: "/ChartViewAgent",
    name: "ChartViewAgent",
    component:ChartViewAgent , 
    
  },
  {
    path: "/writeReviewAgent",
    name: "writeReviewAgent",
    component:writeReviewAgent , 
    
  },
  {
    path: "/writeReview",
    name: "writeReview",
    component: writeReview, 
    
  },
  {
    path: "/FormsUser",
    name: "FormsUser",
    component: FormsUser, 
    
  },

  
  {
    path: "/TablesUser",
    name: "TablesUser",
    component: TablesUser, 
    
  },
  {
    path: "/Track",
    name: "Track",
    component: Track, 
    
  },
  {
    path: "/ChartViewWhereHouse",
    name: "ChartViewWhereHouse",
    component: ChartViewWhereHouse,
  },
  {
    path: "/EditProfile",
    name: "EditProfile",
    component: EditProfile,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },


   
  {
    path: "/FormsWhereHouse",
    name: "FormsWhereHouse",
    component: FormsWhereHouse
  },

  
  {
    path: "/LoginWhereHouse",
    name: "LoginWhereHouse",
    component: LoginWhereHouse,
  },
 
  {
    path: "/TablesWhereHouse",
    name: "TablesWhereHouse",
    component: TablesWhereHouse,
  },
  

  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/ui-elements",
    name: "UIElements",
    component: UIElements,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/charts",
    name: "Chart",
    component: Chart,
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank,
  },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
