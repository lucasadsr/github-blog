import { formatDistanceToNowStrict } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatDateDistance(date: Date) {
  return formatDistanceToNowStrict(date, {
    addSuffix: true,
    locale: ptBR,
  })
}
