export type Tuser = {
    id: number;
    username: string;
    email: string;
    password: string;
    created_at: string;
    deleted_at: string;
} 

export type Tcompetence = {
    id: number;
    title_competence: string;
    content_competence: string;
}

export type Tcritter = {
    id: number;
    content_critter: string;
    competence_id: number;
}

export type TuserHasCritter = {
    id: number;
    user_id: number;
    critter_id: number;
}