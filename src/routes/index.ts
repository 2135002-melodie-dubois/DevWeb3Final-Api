import { Router } from 'express';

import Paths from '../common/Paths';
import PersonnageRoutes from './PersonnageRoutes';


// **** Variables **** //

const apiRouter = Router();


// ** Add personnageRouter ** //

// Init router
const personnageRouter = Router();


personnageRouter.get(Paths.Personnages.Get, PersonnageRoutes.getAll);
personnageRouter.get(Paths.Personnages.GetId, PersonnageRoutes.getById);
personnageRouter.get(Paths.Personnages.GetFranchise, PersonnageRoutes.getByFranchise);
personnageRouter.get(Paths.Personnages.GetPrincipal, PersonnageRoutes.getIfPrincipal);
personnageRouter.post(Paths.Personnages.Add, PersonnageRoutes.add);
personnageRouter.put(Paths.Personnages.Update, PersonnageRoutes.update);
personnageRouter.delete(Paths.Personnages.Delete, PersonnageRoutes.delete);

// Add personnageRouter
apiRouter.use(Paths.Personnages.Base, personnageRouter);


// **** Export default **** //

export default apiRouter;
