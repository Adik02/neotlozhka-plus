import { z } from 'zod'
export const contactSchema = z.object({
  name: z.string().min(1).max(80),
  phone: z.string().min(5).max(30),
  comment: z.string().max(500).optional().default('')
})
