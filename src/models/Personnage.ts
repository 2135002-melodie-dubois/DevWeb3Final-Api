import { Schema, model } from 'mongoose';

export interface IPersonnage {
    _id?:String;
    nom:String;
    auteur:String;
    apparitions: [
        {
            titre:String;
            type_media:String;
            annee_sortie:Number;
        }
    ];
    franchises: [String];
    description:String;
    personnage_principal: Boolean;
    info_creation:{
        cree_par: String;
        date_creation: Date;
    }
};


const PersonnageSchema = new Schema<IPersonnage>({
    nom: { type: String, required: true},
    auteur: { type: String, required: true},
    apparitions: { type: [
            {
                titre:String,
                type_media:{type:String,enum: ['Jeu Video','Serie Televisee','Livre','Film','Musique','Autre']},
                annee_sortie:{type:Number,max:[new Date().getFullYear() + 1,"L'annee de sortie ne peut pas etre future"]},
            }
        ], required: true},
    franchises: { type: [String], required: true},
    description: { type: String, required: false},
    personnage_principal: { type: Boolean, required: true},
    info_creation:{type:{
        cree_par:String,
        date_creation:{type:Date,required: false}
    },required:true}
});

export function isPersonnage(arg: unknown) : arg is IPersonnage {
    return (
        !!arg &&
        typeof arg === 'object' &&
        'nom' in arg && 
        'auteur' in arg && 
        'apparitions' in arg &&
        'franchises' in arg &&
        'description' in  arg &&
        'personnage_principal' in arg &&
        'info_creation' in arg
      );
}
export const Personnage = model<IPersonnage>('personnage', PersonnageSchema);