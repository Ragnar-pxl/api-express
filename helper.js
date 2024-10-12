const mangas = require("./mock-mangas")

/**
 * Helper for message annoucement 
 * @param {*} message 
 * @param {*} data 
 * @returns message and data
 */
exports.success = (message, data) => {
  return {
    message, data
  }
}

/**
 * 
 * @param {*} mangas
 * @returns uniqueId
 */
exports.getUniqueId = (mangas) => {
  const mangasIds = mangas.map(manga => manga.id)
  const maxId = mangasIds.reduce((a, b) => Math.max(a, b))
  const uniqueId = maxId + 1
  return uniqueId
}



