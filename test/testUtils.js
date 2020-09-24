/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { render } from '@testing-library/react'
import JestProvider from 'providers/Jest'
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: JestProvider, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
