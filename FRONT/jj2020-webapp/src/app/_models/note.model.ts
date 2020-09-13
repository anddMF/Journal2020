export class Note {
    id: number;
    id_user: number;
    id_user_shared: number;
    title: string;
    note_text: string;
    active: boolean;
    favorite: boolean;
    tag: string;
    dt_creation: Date;
    dt_edit: Date;

    shared_user: any;
    main_user: any;
}