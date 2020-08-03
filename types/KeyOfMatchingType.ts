export type KeyOfMatchingType<Obj, Type> = { [Key in keyof Obj]: Obj[Key] extends Type? Key : never }[keyof Obj]