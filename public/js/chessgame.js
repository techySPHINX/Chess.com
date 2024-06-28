const socket = io(); //initiated

const chess = new Chess();

const boardElement = document.querySelector(".chessboard");

//implement drag and drop functionality

let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;

//functions for client side

const renderBoard = () => {
  const board = chess.board();
  boardElement.innerHTML = "";

  //for checked pattern
  board.forEach((row, rowindex) => {
    row.forEach((square, squareindex) => {
      const squareElement = document.createElement("div");
      squareElement.classList.add(
        "square",
        (rowindex + squareindex) % 2 === 0 ? "light" : "dark"
      );

      squareElement.dataset.row = rowindex;
      squareElement.dataset.col = squareindex;

      // if element is present or not means
      if (square) {
        const pieceElement = document.createElement("div");
        pieceElement.classList.add(
          "piece",
          square.color === "w" ? "white" : "black"
        );

        pieceElement.innerText = "";
        pieceElement.draggable = playerRole === square.color;

        pieceElement.addEventListener("dragstart", () => {
          if (pieceElement.draggable) {
            draggedPiece = pieceElement;
            sourceSquare = { row: rowindex, col: squareindex };
            e.dataTransfer.setData("text/plain", ""); // for cross-platform
          }
        });

        pieceElement.addEventListener("dragend", (e) => {
          draggedPiece = null;
          sourceSquare = null;
        });

        squareElement.appendChild(pieceElement);
      }

      squareElement.addEventListener("dragover", function (e) {
        e.preventDefault();
      });

      squareElement.addEventListener("drop", function (e) {
        e.preventDefault();
        if (draggedPiece) {
          const targetSource = {
            row: parseInt(squareElement.dataset.row),
            col: parseInt(squareElement.dataset.col),
          };
        }
      });
    });
  });
};
const handleMove = () => {};
const getPieceUnicode = () => {};

renderBoard();
