import React, { memo } from 'react'
import Styles from './form-status-style.scss'
import Spinner from '@/presentation/components/spinner/spinner'

const FormStatus: React.FC = () => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner}/>
      <span className={Styles.error}>Erro</span>
    </div>
  )
}

export default memo(FormStatus)
