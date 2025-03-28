import { prisma } from './client' // exports instance of prisma 
export default prisma;
export * from "../generated/client" // exports generated types from prisma