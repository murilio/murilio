export function convertStringToSlug (string: string) {
  string = string.replace(/^\s+|\s+$/g, '') // trim
  string = string.toLowerCase()

  // remove acentos
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
  const to = 'aaaaeeeeiiiioooouuuunc------'

  for (let i = 0, l = from.length; i < l; i++) {
    string = string.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  string = string.replace(/[^a-z0-9 -]/g, '') // remove caracteres especiais
    .replace(/\s+/g, '-') // adiciona o - no lugar do espaçamento
    .replace(/-+/g, '-') // se tiver vários - adiciona apenas um

  return string
}
