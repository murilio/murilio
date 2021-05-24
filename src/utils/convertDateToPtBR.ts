import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function convertDateToPtBR (date: string) {
  return format(parseISO(date), 'dd MMMM yyyy', { locale: ptBR })
}
