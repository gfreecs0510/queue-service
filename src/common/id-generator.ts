import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 12)

export const generateId = (prefix: string) : string => {
    return `${prefix}-${nanoid()}`
}