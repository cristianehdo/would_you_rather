import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'semantic-ui-react'

const QuestionOptions = props => {
  const { options, onChange, value } = props
  if (typeof options === 'string') {
    return options
  }
  return (
    <Form >
      {Object.keys(options).map((optionKey) => {
        return <Form.Field
          key={optionKey}
          label={options[optionKey]}
          control='input'
          type='radio'
          name='optionsRadio'
          onChange={() => onChange({answer: optionKey})}
          checked={value === optionKey}
          inline
        />
      })}
    </Form>
  )
}

QuestionOptions.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.object,
}
export default QuestionOptions
