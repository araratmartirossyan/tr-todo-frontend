import { useSelector } from 'react-redux'
import { FormEvent, KeyboardEvent, useEffect, useState } from 'react'

// Components
import { Page } from '@/components/layout/page'
import { Button, StyledInput, TodoItem, TodoList, Message } from '@/components'

// Styles
import { Section, ActionBar } from './styles'

// Stores
import { useAppDispatch } from '@/store'
import { getTasks } from '@/store/tasks/store'
import {
  createTaskAction,
  deleteTaskAction,
  fetchTasksAction,
  updateTaskAction,
} from '@/store/tasks/thunks'
import { useValidate } from '@/hooks/useValidate.hook'

export const Home = () => {
  // Task
  const [task, setTask] = useState('')
  const { validate, error } = useValidate()

  const onTaskInput = ({
    currentTarget: { value },
  }: FormEvent<HTMLInputElement>) => setTask(value)

  const handleCreateTask = async () => {
    const result = validate(task)

    if (!result.error) {
      await dispatch(createTaskAction({ title: task }))
      setTask('')
    }
  }

  const handlePressKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      event.stopPropagation()
      handleCreateTask()
    }
  }

  // Stores
  const tasks = useSelector(getTasks)
  const dispatch = useAppDispatch()

  // Lifecycle
  useEffect(() => {
    dispatch(fetchTasksAction())
  }, [dispatch])

  return (
    <Page>
      {tasks.length === 0 && (
        <Section>
          <h2 className="home-page-empty">
            You have nothing to do. Create new task or take a rest
          </h2>
        </Section>
      )}
      <Section>
        <TodoList>
          {tasks.map((item, key) => (
            <TodoItem
              key={key}
              onUpdate={(payload) => dispatch(updateTaskAction(payload))}
              onRemove={(_id) => dispatch(deleteTaskAction(_id))}
              {...item}
            />
          ))}
        </TodoList>
      </Section>
      <Section>
        <Message>{error.message}</Message>
      </Section>
      <ActionBar>
        <StyledInput
          placeholder="Add task"
          className="task-input"
          name="title"
          value={task}
          onKeyDown={handlePressKey}
          onInput={onTaskInput}
        />
        <Button primary onClick={handleCreateTask} type="submit">
          Add
        </Button>
      </ActionBar>
    </Page>
  )
}
