// import { ComputedRef, Ref } from "vue-demi"
// import { Model, ApiError } from "types"

// export interface UseModelReturn<M extends Model> {
//   create: (customForm?: Partial<any>) => Promise<void>
//   find: () => Promise<void>
//   update: () => Promise<void>
//   remove: () => Promise<void>
//   model: ComputedRef<Item<InstanceOf<M>>>
//   form: Partial<any>
//   resetForm: () => void
//   id: Ref<string | number | null>
//   error: Ref<ApiError | null>
//   creating: Ref<boolean>
//   finding: Ref<boolean>
//   updating: Ref<boolean>
//   removing: Ref<boolean>
//   loading: Ref<boolean>
// }

// export type UseModel<M extends Model> = () => UseModelReturn<M>