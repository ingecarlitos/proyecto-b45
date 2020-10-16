class NegocioClass {
    constructor(nombre, horario, categoria, contacto, telefono, redes, id) {
      this[id] = {
        nombre: nombre,
        horario: horario,
        categoria: categoria,
        contacto: contacto,
        telefono: telefono,
        redes: redes
      }
    }
  }
  module.exports = { NegocioClass };