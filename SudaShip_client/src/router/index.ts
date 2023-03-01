import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Forms from "../views/Forms.vue";
import Tables from "../views/Tables.vue";
import UIElements from "../views/UIElements.vue";
import Login from "../views/Login.vue";
import Modal from "../views/Modal.vue";
import Chart from "../views/ChartView.vue";
import Blank from "../views/BlankView.vue";
import NotFound from "../views/NotFound.vue";
import EditProfile from "../views/EditProfile.vue";
import TablesWhereHouse from "../view2/TablesWhereHouse.vue";
import LoginWhereHouse from "../view2/LoginWhereHouse.vue";
import FormsWhereHouse from "../view2/FormsWhereHouse.vue";
import ChartViewWhereHouse from "../view2/ChartViewWhereHouse.vue";
import FormsUser from "../userview3/FormsUser.vue";
import Track from "../userview3/Track.vue";
import TablesUser from "../userview3/TablesUser.vue";
import writeReview from "../userview3/writeReview.vue";
import ChartViewUser from "../userview3/ChartViewUser.vue";
import TablesAgent from "../Agentview4/TablesAgent.vue";
import TrackAgent from "../Agentview4/TrackAgent.vue";
import ChartViewAgent from "../Agentview4/ChartViewAgent.vue";
import writeReviewAgent from "../Agentview4/writeReviewAgent.vue";
import AgentEditProfile from "../Agentview4/AgentEditProfile.vue";
import UserEditProfile from "../userview3/UserEditProfile.vue";
import RepresentiveEditProfile from "../Representiveview5/RepresentiveEditProfile.vue";
import ChartViewRepresentive from "../Representiveview5/ChartViewRepresentive.vue";
import TablesRepresentive from "../Representiveview5/TablesRepresentive.vue";
import TrackRepresentive from "../Representiveview5/TrackRepresentive.vue";
import writeReviewrepresentive from "../Representiveview5/writeReviewrepresentive.vue";
import UserPayment from "../userview3/UserPayment.vue";
import Employee from "../views/Employee.vue";
import cargoDetils from "../userview3/cargoDetils.vue";
import CreateOrder from "../userview3/CreateOrder.vue";
import Registration from "../views/Registration.vue";
import Forget from "../views/Forget.vue";
import assingeEmployee from "../salemanviews/assingeEmployee.vue";
import salemanEditProfile from "../salemanviews/salemanEditProfile.vue";
import ChartViewSaleman from "../salemanviews/ChartView.vue";
import WhereHousEditProfile from "../view2/WhereHousEditProfile.vue";

import SendEmail from "../views/SendEmail.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  // {
  //   path: "/:role",
  //   name: "Login",
  //   component: Login,
  //   meta: { layout: "empty" },
  // },
  {
    path: "/SendEmail",
    name: "SendEmail",
    component: SendEmail,
    meta: { layout: "empty" },
  },
  {
    path: "/Forget",
    name: "Forget",
    component: Forget,
    meta: { layout: "empty" },
  },
  {
    path: "/assingeEmployee",
    name: "assingeEmployee",
    component: assingeEmployee,
    meta: {
      needsAuth: true,
      needsRole: "saleman",
    },
  },
  {
    path: "/assingeEmployee",
    name: "assingeEmployee",
    component: assingeEmployee,
    meta: {
      needsAuth: true,
      needsRole: "saleman",
    },
  },

  {
    path: "/ChartViewSaleman",
    name: "ChartViewSaleman",
    component: ChartViewSaleman,
    meta: {
      needsAuth: true,
      needsRole: "saleman",
    },
  },

  {
    path: "/WhereHousEditProfile",
    name: "WhereHousEditProfile",
    component: WhereHousEditProfile,
    meta: {
      needsAuth: true,
      needsRole: "wherehouse",
    },
  },
  {
    path: "/Registration",
    name: "Registration",
    component: Registration,
    meta: { layout: "empty" },
  },
  {
    path: "/UserPayment",
    name: "UserPayment",
    component: UserPayment,
    meta: {
      needsAuth: true,
      needsRole: "user",
    },
  },
  {
    path: "/cargoDetils",
    name: "cargoDetils",
    component: CreateOrder,
    // component:cargoDetils ,
    meta: {
      needsAuth: true,
      needsRole: "user",
    },
  },

  {
    path: "/Employee",
    name: "Employee",
    component: Employee,
    meta: {
      needsAuth: true,
      needsRole: "admin",
    },
  },

  {
    path: "/ChartViewUser",
    name: "ChartViewUser",
    component: ChartViewUser,
    meta: {
      needsAuth: true,
      needsRole: "user",
    },
  },

  {
    path: "/TrackRepresentive",
    name: "TrackRepresentive",
    component: TrackRepresentive,
    meta: {
      needsAuth: true,
      needsRole: "representive",
    },
  },
  {
    path: "/TablesRepresentive",
    name: "TablesRepresentive",
    component: TablesRepresentive,
    meta: {
      needsAuth: true,
      needsRole: "representive",
    },
  },

  {
    path: "/ChartViewRepresentive",
    name: "ChartViewRepresentive",
    component: ChartViewRepresentive,
    meta: {
      needsAuth: true,
      needsRole: "representive",
    },
  },

  {
    path: "/writeReviewrepresentive",
    name: "writeReviewrepresentive",
    component: writeReviewrepresentive,
    meta: {
      needsAuth: true,
      needsRole: "representive",
    },
  },

  {
    path: "/AgentEditProfile",
    name: "AgentEditProfile",
    component: AgentEditProfile,
  },

  {
    path: "/UserEditProfile",
    name: "UserEditProfile",
    component: UserEditProfile,
  },

  {
    path: "/RepresentiveEditProfile",
    name: "RepresentiveEditProfile",
    component: RepresentiveEditProfile,
  },

  {
    path: "/TablesAgent",
    name: "TablesAgent",
    component: TablesAgent,
    meta: {
      needsAuth: true,
      needsRole: "agent",
    },
  },
  {
    path: "/TrackAgent",
    name: "TrackAgent",
    component: TrackAgent,
    meta: {
      needsAuth: true,
      needsRole: "agent",
    },
  },
  {
    path: "/ChartViewAgent",
    name: "ChartViewAgent",
    component: ChartViewAgent,
    meta: {
      needsAuth: true,
      needsRole: "agent",
    },
  },
  {
    path: "/writeReviewAgent",
    name: "writeReviewAgent",
    component: writeReviewAgent,
    meta: {
      needsAuth: true,
      needsRole: "agent",
    },
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
    meta: {
      needsAuth: true,
      needsRole: "user",
    },
  },

  {
    path: "/TablesUser",
    name: "TablesUser",
    component: TablesUser,
    meta: {
      needsAuth: true,
      needsRole: "user",
    },
  },
  {
    path: "/Track",
    name: "Track",
    component: Track,
    meta: {
      needsAuth: true,
    },
  },
  {
    path: "/ChartViewWhereHouse",
    name: "ChartViewWhereHouse",
    component: ChartViewWhereHouse,
    meta: {
      needsAuth: true,
      needsRole: "wherehouse",
    },
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
    meta: {
      needsAuth: true,
      needsRole: "admin",
    },
  },

  {
    path: "/FormsWhereHouse",
    name: "FormsWhereHouse",
    component: FormsWhereHouse,
    meta: {
      needsAuth: true,
      needsRole: "wherehouse",
    },
  },

  {
    path: "/LoginWhereHouse",
    name: "LoginWhereHouse",
    component: LoginWhereHouse,
    meta: {
      needsAuth: true,
      needsRole: "wherehouse",
    },
  },

  {
    path: "/TablesWhereHouse",
    name: "TablesWhereHouse",
    component: TablesWhereHouse,
    meta: {
      needsAuth: true,
      needsRole: "wherehouse",
    },
  },

  {
    path: "/tables",
    name: "Tables",
    component: Tables,
    meta: {
      needsAuth: true,
      needsRole: "admin",
    },
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
    meta: {
      needsAuth: true,
      needsRole: "admin",
    },
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
