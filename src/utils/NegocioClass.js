class NegocioClass {
    constructor(nombre, categoria, horario, contacto, telefono, redes, id) {
      this[id] = {
        nombre: nombre,
        categoria: categoria,
        horario: horario,
        contacto: contacto,
        telefono: telefono,
        redes: redes
      }
    }
  }
  module.exports = { NegocioClass };