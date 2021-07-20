import { MouseEvent, FC, useState } from 'react'
import { Button, Checkbox } from './../index'
import { EditModeTodoItem } from './components/EditModeTodoItem'
import DeleteIcon from '@/assets/icons/delete.svg?component'
import EditIcon from '@/assets/icons/edit.svg?component'

import { StyledTodoItem, ActionsBlock } from './styles'

export interface Props {
  title: string
  done: boolean
  _id: string
  onRemove: (_id: string) => void
  onUpdate: (args: TODO.UpdateArguments) => void
}

export const TodoItem: FC<Props> = ({
  title,
  done,
  _id,
  onUpdate,
  onRemove,
}) => {
  const [inEditMode, setEditMode] = useState(false)

  const toggleTask = () => onUpdate({ title, _id, done: !done })

  if (inEditMode && _id) {
    return (
      <EditModeTodoItem
        data-test-id="todo-edit-task"
        onUpdate={onUpdate}
        title={title}
        _id={_id}
        done={done}
        onSetEditMode={setEditMode}
      />
    )
  }

  return (
    <StyledTodoItem onClick={toggleTask} done={done}>
      <Checkbox
        className="todo-checkbox"
        name="done"
        data-test-id="todo-checkbox-toogle"
        checked={done}
        onChange={toggleTask}
      />

      <span>{title}</span>

      <ActionsBlock>
        <Button
          tertiary
          className="todo-icon-button"
          data-test-id="todo-edit-button"
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation()
            setEditMode(!inEditMode)
          }}
        >
          <EditIcon />
        </Button>
        <Button
          tertiary
          className="todo-icon-button"
          data-test-id="todo-remove-button"
          onClick={(event: MouseEvent<HTMLButtonElement>) => {
            event.stopPropagation()
            onRemove(_id)
          }}
        >
          <DeleteIcon />
        </Button>
      </ActionsBlock>
    </StyledTodoItem>
  )
}
