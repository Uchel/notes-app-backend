const {
  addNoteHandler,
  getNoteByIdHandler,
  getAllNotesHandler,
  EditNoteByIdHandler,
  DeleteNoteByIdHandler
} = require("./handller");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandler,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandler,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: EditNoteByIdHandler,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: DeleteNoteByIdHandler,
  },
];

module.exports = routes;
