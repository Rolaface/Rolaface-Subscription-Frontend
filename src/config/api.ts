import { ENV } from "./env";

export const SUB_BASE = ENV.apiBaseUrl;

export const API = {
  loginApi: {
    login: `${SUB_BASE}/api/method/auth_api.user_management.api.auth.login`,
    logout: `${SUB_BASE}/api/method/auth_api.user_management.api.auth.logout`,
    getUserDetails: `${SUB_BASE}/api/method/auth_api.user_management.api.auth.get_login_user`,
  },

    plan: {
    products: `${SUB_BASE}/api/resource/${encodeURIComponent("Custom Product")}`,
    modules: `${SUB_BASE}/api/resource/${encodeURIComponent("Custom Module")}`,
    subModules: `${SUB_BASE}/api/resource/${encodeURIComponent("Custom Sub Module")}`,
  },


  country:{
     getCountries: `${SUB_BASE}/api/resource/Country`
  },

  currency:{
      getCurrency:`${SUB_BASE}/api/method/custom_api.api.search.get_currencies`
  },
  /* =========================
   * CUSTOMER
   * ========================= */
  customer: {
    getAll: `${SUB_BASE}/api/method/custom_api.api.selling.customer.api.get_customers`,
    getById: `${SUB_BASE}/api/method/custom_api.api.selling.customer.api.get_customer_by_id`,
    create: `${SUB_BASE}/api/method/custom_api.api.selling.customer.api.create_customer`,
    update: `${SUB_BASE}/api/method/custom_api.api.selling.customer.api.update_customer`,
    delete: `${SUB_BASE}/api/method/custom_api.api.selling.customer.api.delete_customer`,
    updateStatus: `${SUB_BASE}/api/method/custom_api.api.selling.customer.api.update_customer_status`,
  },
   /* =========================
   * PLAN
   * ========================= */
  plans: {
    create: `${SUB_BASE}/api/method/rolaface_subscription.modules.plan.plan.create`,
    getAll: `${SUB_BASE}/api/method/rolaface_subscription.modules.plan.plan.get`,
    getById:`${SUB_BASE}/api/method/rolaface_subscription.modules.plan.plan.get_by_id`,
    update: `${SUB_BASE}/api/method/rolaface_subscription.modules.plan.plan.update`,
    updateStatus: `${SUB_BASE}/api/method/rolaface_subscription.modules.plan.plan.update_status`

  },
   /* =========================
   * SUBSCRIPTION
   * ========================= */

  subscriptions: {
    getAll: `${SUB_BASE}/api/method/rolaface_subscription.modules.subscription.subscription.get`,
    create: `${SUB_BASE}/api/method/rolaface_subscription.modules.subscription.subscription.create`,
    getById: `${SUB_BASE}/api/method/rolaface_subscription.modules.subscription.subscription.get_by_id`,
    update: `${SUB_BASE}/api/method/rolaface_subscription.modules.subscription.subscription.update`,
    cancel: `${SUB_BASE}/api/method/rolaface_subscription.modules.subscription.subscription.cancel`,
    submit: `${SUB_BASE}/api/method/rolaface_subscription.modules.subscription.subscription.submit`
  },

     /* =========================
   * frappe Api
   * ========================= */
  frappe:{
    delete: `${SUB_BASE}/api/method/frappe.client.delete`
  }


} as const;