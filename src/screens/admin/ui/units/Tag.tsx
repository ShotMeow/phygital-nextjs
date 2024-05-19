import { type FC, useState } from "react";
import Button from "@/src/shared/ui/Button";

import { type TagType, useDeleteTag } from "@/src/entities/tags";

import DeleteModal from "../modals/DeleteModal";
import FormModal from "../modals/FormModal";
import TagsForm from "../forms/TagsForm";

interface Props {
  tag: TagType;
}

const Tag: FC<Props> = ({ tag }) => {
  const [deleteModalShown, setDeleteModalShown] = useState<boolean>(false);
  const [updateModalShown, setUpdateModalShown] = useState<boolean>(false);

  const mutation = useDeleteTag();

  const handleDelete = () => {
    mutation.mutate(tag.id);
    setDeleteModalShown(false);
  };

  return (
    <>
      <li className="flex items-center justify-between">
        <span>
          {tag.id}. {tag.name}
        </span>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setUpdateModalShown(true)}
            variant="transparent"
          >
            Изменить
          </Button>
          <Button onClick={() => setDeleteModalShown(true)} variant="primary">
            Удалить
          </Button>
        </div>
      </li>
      {updateModalShown && (
        <FormModal
          open={updateModalShown}
          activeTab="tags"
          onClose={setUpdateModalShown}
        >
          <TagsForm tag={tag} onClose={setUpdateModalShown} type="edit" />
        </FormModal>
      )}
      {deleteModalShown && (
        <DeleteModal
          open={deleteModalShown}
          onClose={setDeleteModalShown}
          action={handleDelete}
        >
          Вы точно хотите удалить тег &quot;{tag.name}&quot;?
        </DeleteModal>
      )}
    </>
  );
};

export default Tag;