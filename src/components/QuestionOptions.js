import React from 'react'
import { Form } from 'semantic-ui-react'

const QuestionOptions = props => {
  const { options } = props
  if (typeof options === 'string') {
    return options
  }
  return (
    <Form>
      {options.map((option) => {
        return <Form.Field
          key={option}
          label={option}
          control='input'
          type='radio'
          name='optionsRadio'
          inline
          />
      })}
    </Form>
  )
}

export default QuestionOptions
