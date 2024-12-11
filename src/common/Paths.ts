/**
 * Express router paths go here.
 */


export default {
  Base: '/api',
  Personnages: {
    Base: '/personnages',
    Get: '/',
    GetId : '/id/:idPersonnage',
    GetFranchise:'/franchise/:franchise',
    GetPrincipal:'/principal/:principal',
    Add: '/',
    Update: '/',
    Delete: '/',
  },
} as const;
