import PersonnageRepo from '@src/repos/PersonnageRepo';
import { IPersonnage } from '@src/models/Personnage';

// **** Functions **** //


function getAll(): Promise<IPersonnage[]> {
  return PersonnageRepo.getAll();
}


function getByNom(idPersonnage:String): Promise<IPersonnage[] | null> {
    return PersonnageRepo.getById(idPersonnage);
}

function getByFranchise(franchise: String): Promise<IPersonnage[] | null> {
    return PersonnageRepo.getByFranchise(franchise);
}

function getIfPrincipal(principal:Boolean): Promise<IPersonnage[] | null> {
    return PersonnageRepo.getIfPrincipal(principal);
}

function add(personnage: IPersonnage) : Promise<void>{
    return PersonnageRepo.add(personnage);
}

function update (personnage : IPersonnage) : Promise<void>{
    return PersonnageRepo.update(personnage);
}
function _delete(personnage : IPersonnage) : Promise <void>{
  return PersonnageRepo.delete(personnage);
}
// **** Export default **** //

export default {
    getAll,
    getByNom,
    getByFranchise,
    getIfPrincipal,
    add,
    update,
    delete : _delete
} as const;