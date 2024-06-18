# Procedure

## Initialization
socket and chess objects are initialized.
Board element is selected from the DOM.
Initial values for draggedPiece, sourceSquare and playerRole are set to null.


## Initial Board Rendering
renderBoard() is called to display the initial state of the chessboard.


## Drag and drop Functionality
renderBoard() sets up drag and drop event listeners for each piece and square.
Pieces are draggable based on the player's role.
When a piece is dragged , draggedPiece and sourceSquare are set.
When a piece is dropped , handlemOve() is called to handle te move logic and emit it to the server.


# Variables Client side
socket chess BoardElement DraggedPiece SourceSquare PlayerRole

# Functions Client Side      # Socket Client Side
RenderBoard                 Socket.On("PlayerRole")
HandleMove                  Socket.On("SpectatorRole")
GetPieceUnicode             Socket.On("BoardState")  
                            Socket.On("Move")