import React, { ReactNode } from 'react'

interface ButtonProp {
  //ToDo расширить тип
  children: ReactNode
}

export const AppButton = (props: ButtonProp) => {
  return (
    <button> { props.children } </button>
  )
}
