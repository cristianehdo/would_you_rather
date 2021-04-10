import React from 'react'
import PropTypes from 'prop-types'
import { Tab as SemanticTab } from 'semantic-ui-react'
import QuestionsList from './QuestionsList'

const Tab = props => {
  const { tabs, questions, users } = props

  const panes = Object.keys(tabs).map((tabKey)=> {
    return {
      menuItem: tabs[tabKey].title,
      pane: (
        <SemanticTab.Pane key={tabKey}>
          <QuestionsList
            questions={questions}
            users={users}
            questionsIds={tabs[tabKey].questions}
            tabName={tabKey}
          />
        </SemanticTab.Pane>
      ),
    }
  })
  return (
    <SemanticTab
      panes={panes}
      renderActiveOnly={false}
      style={{width: '328px', margin: '0 auto'}}/>
  )
}

Tab.propTypes = {
  questions: PropTypes.object,
  tabs: PropTypes.object,
  users: PropTypes.object,
}
export default Tab
