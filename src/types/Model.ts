export interface Model {
  /**
   * Unique name to identify the model
   * e.g. "todos", "email_addresses"
   */
  entity: string

  /**
   * When apiEntity is not defined, entity is used. This is preferable
   * to maintain consistency. In cases where they differ
   * an apiEntity can be provided
   */
  apiEntity?: string
}

export default Model