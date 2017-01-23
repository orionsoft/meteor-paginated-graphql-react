export const getVariables = function (params) {
  return params.split('$').filter(part => part.split(':')[0]).map(part => {
    return part.split(':')[0]
  })
}

export const getQueryParams = function (params) {
  return params.split('$').map(part => {
    if (!part) return ''
    const variable = part.split(':')[0]
    return `${variable}: $${variable}`
  }).join(' ')
}
