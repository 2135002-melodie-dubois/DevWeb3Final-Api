import { IPersonnage, Personnage } from '@src/models/Personnage';

async function getAll(): Promise<IPersonnage[]> {
    const personnages = await Personnage.find();
    return personnages;
}

async function getById(id:String): Promise<IPersonnage[] | null> {
    const personnage = await Personnage.find({
        _id:id,
    });
    return personnage;
} 

async function getByFranchise(franchise:String): Promise<IPersonnage[] | null> {
  const personnage = await Personnage.find({
        franchises:franchise,
  });
  return personnage;
} 

async function getIfPrincipal(personnagePrincipal: Boolean): Promise<IPersonnage[] | null> {
  const personnage = await Personnage.find({
        personnage_principal:personnagePrincipal,
  });
  return personnage;
} 

async function add(personnage:IPersonnage): Promise<void> {
    const nouveauPersonnage = new Personnage(personnage);
    nouveauPersonnage.info_creation.date_creation = new Date(Date.now())
    await nouveauPersonnage.save();
}

async function update(personnage: IPersonnage): Promise<void> {
    const personnageUpdate = await Personnage.updateOne(
        {_id: personnage._id},
        {$set:{personnage}}
    );
}

async function _delete(personnage:IPersonnage): Promise<void> {
    const personnageDelete = await Personnage.deleteOne(
        {_id: personnage._id},
    );
}

export default {
    getAll,
    getById,
    getByFranchise,
    getIfPrincipal,
    add,
    update,
    delete : _delete,
  } as const;