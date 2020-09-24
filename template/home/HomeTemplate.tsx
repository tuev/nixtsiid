import { DefaultLayout } from 'layout'
import Button from 'components/button'
import { FC, ReactNode } from 'react'

const HomeTemplate: FC & { Layout?: ReactNode } = () => {
  return (
    <div className="container">
      this i new homeTemplate page
      <Button>Button asdjhgjg {process.env.PORT}</Button>
    </div>
  )
}

HomeTemplate.Layout = DefaultLayout

export default HomeTemplate
