import type { Field } from './Field'
import type { Value } from './Value'
import type { ErrorBasicBuilder, ErrorWriter } from './base'

export class ArrayField implements ErrorBasicBuilder, Field {
  constructor(public value: Value) {}
  write(writer: ErrorWriter): void {
    writer.write(this.value)
  }

  markAsError(): void {
    this.value.markAsError()
  }
}
