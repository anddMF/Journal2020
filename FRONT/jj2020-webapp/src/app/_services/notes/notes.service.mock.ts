import { of } from 'rxjs';

export class NotesServiceStub {

    getNotes() {
        return of([
            
                {
                    id: 1,
                    active: true,
                    favorite: true,
                    note_text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quasi nisi accusantium.',
                    title: 'NOTE 1titulo'
                },
                {
                    id: 2,
                    active: true,
                    favorite: true,
                    note_text: 'Lorem ium.',
                    title: 'NOTE'
                },
                {
                    id: 2,
                    active: true,
                    favorite: false,
                    note_text: 'Lorem ium.',
                    title: 'NOTE'
                }
            
            ])
    }
}