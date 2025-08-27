const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/campanha.db');

db.serialize(() => {
  // Tabela de Tipos de Roupa
  db.run(`CREATE TABLE IF NOT EXISTS roupas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tipo TEXT NOT NULL,
    pontuacao INTEGER NOT NULL
  )`);

  // Tabela de Turmas
  db.run(`CREATE TABLE IF NOT EXISTS turmas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    turma TEXT NOT NULL,
    docente TEXT NOT NULL
  )`);

  // Tabela de Doações
  db.run(`CREATE TABLE IF NOT EXISTS doacoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    turma_id INTEGER NOT NULL,
    roupa_id INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    data TEXT NOT NULL,
    FOREIGN KEY(turma_id) REFERENCES turmas(id),
    FOREIGN KEY(roupa_id) REFERENCES roupas(id)
  )`);
});

module.exports = db;