boardsize = 8
boardstring = ""
startchar = "#"
nextchar = " "
for (i=0; i < boardsize; i++)
{
    // columns
    for (j=0; j < boardsize; j++)
    {
      j % 2 ? boardstring += startchar : boardstring += nextchar
    }
    boardstring += "\n"
    i % 2 ? (startchar = " ", nextchar = "#") : (startchar = "#", nextchar = " ")
}
console.log (boardstring)
