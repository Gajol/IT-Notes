boardsize = 8
boardstring = ""
startchar = "#"
nextchar = " "
for (i=0; i < boardsize; i++)
{
    // columns
    for (j=0; j < boardsize; j++)
    {
      (i + j) % 2 ? boardstring += startchar : boardstring += nextchar
    }
    boardstring += "\n"
}
console.log (boardstring)
