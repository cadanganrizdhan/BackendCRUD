import response from "../response.js";
import { query } from "../database/database.js";

export const getNotes = async (req, res) => {
  try {
    const result = await query(`SELECT * FROM notes`);
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
};
export const getNotesById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await query(`SELECT * FROM notes WHERE id = ?`, [id]);
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
};

export const createNotes = async (req, res) => {
  try {
    const { title, note } = req.body;
    const datetime = new Date();
    const result = await query(
      `INSERT INTO notes (title, datetime, note ) VALUES (?, ?, ?)`,
      [title, datetime, note]
    );
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
};

export const updateNotes = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, note } = req.body;
    const datetime = new Date();
    const result = await query(
      `UPDATE notes SET title = ?,  datetime = ?, note = ? WHERE id = ?`,
      [title, datetime, note, id]
    );
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
};



export const deleteNotes = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await query(`DELETE FROM notes WHERE id = ?`, [id]);
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
};
