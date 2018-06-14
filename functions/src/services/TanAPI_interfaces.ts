// IN

export interface Position {
    longitude: string,
    latitude: string
}


//  OUT

export interface ArretLieu {
    codeLieu: string,
    libelle: string,
    distance: string,
    ligne: Array<Ligne>
}

export interface Ligne {
    numLigne: string,
    typeLigne: TypeLigne,
    directionSens1: string,
    directionSens2: string,
    accessible: string,
    etatTrafic: number
}

export interface TempsAttente {
    sens: Sens,
    terminus: string,
    infotrafic: boolean,
    temps: string,
    dernierDepart: string, // Boolean to cast
    tempsReel: string, // Boolean to cast
    ligne: Ligne,
    arret: ArretCode
}
export interface ArretCode {
    codeArret: string,
    libelle: string,
    accessible: boolean
}

export interface HoraireArret {
    arret: ArretCode,
    ligne: Ligne,
    codeCouleur: CodeCouleur,
    plageDeService: string,
    notes: Array<Note>,
    horaires: Array<Horaire>,
    prochainsHoraires: Array<Horaire>
}

export interface Horaire {
    heure: string,
    passages: Array<string>
}

export interface Note {
    code: string,
    libelle: string
}

export enum TypeLigne {
    TRAMWAY = 1,
    BUSWAY = 2,
    BUS = 3,
    NAVIBUS = 4
}

export enum CodeCouleur {
    BLEU = "1",
    VERT = "2",
    JAUNE = "3",
    VIOLET = "4",
    BLANC = "5",
    ORANGE = "6"
}

export enum Sens {
    directionSens1 = 1,
    directionSens2 = 2
}