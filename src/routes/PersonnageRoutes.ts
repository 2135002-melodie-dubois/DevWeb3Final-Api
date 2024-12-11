import HttpStatusCodes from '@src/common/HttpStatusCodes';

import PersonnageService from '@src/services/PersonnageService';
import { Personnage, IPersonnage,isPersonnage} from '@src/models/Personnage';
import { IReq, IRes } from './common/types';
import check from './common/check';
;

// **** Functions **** //


async function getAll(_: IReq, res: IRes) {
  const personnages = await PersonnageService.getAll();
  return res.status(HttpStatusCodes.OK).json({ personnages });
}

async function getById(req: IReq, res: IRes) {
    const idPersonnage = check.isStr(req.params, 'idPersonnage');
    const personnage = await PersonnageService.getByNom(idPersonnage);
    return res.status(HttpStatusCodes.OK).json({personnage});
}

async function getByFranchise(req: IReq, res: IRes) {
    const franchise = check.isStr(req.params , 'franchise');
    const personnages = await PersonnageService.getByFranchise(franchise);
    return res.status(HttpStatusCodes.OK).json({personnages});
}

async function getIfPrincipal(req: IReq, res: IRes) {
  const principal = check.isBool(req.params , 'principal');
  const personnages = await PersonnageService.getIfPrincipal(principal);
  return res.status(HttpStatusCodes.OK).json({personnages});
}


async function add(req: IReq, res: IRes) {
  const personnage = check.isValid(req.body,'personnage',isPersonnage);
  const personnageCree = await PersonnageService.add(personnage);
  return res
    .status(HttpStatusCodes.CREATED)
    .json({ personnage: personnageCree })
    .end();
}

async function update(req: IReq, res: IRes) {
  const personnage = check.isValid(req.body,'personnage',isPersonnage);
  await PersonnageService.update(personnage);
  return res.status(HttpStatusCodes.OK).end();
}

async function _delete(req: IReq, res: IRes) {
  const personnage = check.isValid(req.body,'personnage',isPersonnage);
  await PersonnageService.delete(personnage);
  return res.status(HttpStatusCodes.OK).end();
}

// **** Export default **** //

export default {
  getAll,
  getById,
  getByFranchise,
  getIfPrincipal,
  add,
  update,
  delete : _delete
} as const;