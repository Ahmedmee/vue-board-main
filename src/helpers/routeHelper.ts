export function getRedirectRoleRoute(role:string):string {
  if(role==="admin"){
    return ("/charts");
    }
    else if(role==="saleman") {
    // console.log(userStore.userRole);
      return ("/ChartViewWhereHouse");
    }
    else if(role==="wherehouse") {
    // console.log(userStore.userRole);
      return ("/ChartViewWhereHouse");
    }
  
  
    else if(role==="agent") {
    // console.log(userStore.userRole);
      return ("/ChartViewAgent");
    }
  
    else if(role==="representive") {
    // console.log(userStore.userRole);
      return ("/ChartViewRepresentive");
    }
  return ("/ChartViewUser");
}