import * as React from 'react'
import PropTypes from 'prop-types'

import styles from './PageTitle.module.css'

export const PageTitle = ({
  title,
}) => {
  return (
    <h2 className={styles.heading}>{title}</h2>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}
