import type { ObjectValue } from './ObjectValue'
import type { ErrorBasicBuilder, ErrorWriter } from './base'

export abstract class Value implements ErrorBasicBuilder {
  abstract write(writer: ErrorWriter): void

  /**
   * Returns total width the value when it is rendered. Used
   * for determining underline width.
   */
  abstract getPrintWidth(): number

  public hasError = false

  markAsError(): this {
    this.hasError = true
    return this
  }

  abstract asObject(): ObjectValue | undefined
}
