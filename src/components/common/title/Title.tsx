import { FC } from 'react'

type PropsType = {
  className: any
  children?: JSX.Element
  h3: string
  span: string
}

export const Title: FC<PropsType> = ({ className, children, h3, span }) => {
  return (
    <div className={className}>
      <h3>
        {h3}
        <span>{span}</span>
      </h3>

      {children}
    </div>
  )
}
