import { NoteData, Tag } from '../App';
import NoteForm from './NoteForm';

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (data: Tag) => void;
  availableTags: Tag[];
};

function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm
        onAddTag={onAddTag}
        onSaveNote={onSubmit}
        availableTags={availableTags}
      />
    </>
  );
}

export default NewNote;
