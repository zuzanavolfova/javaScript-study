//TASK turning page
// A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page  is always on the right side. When they flip page , they see pages  and . Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is  pages long, and a student wants to turn to page , what is the minimum number of pages to turn? They can start at the beginning or the end of the book.

function pageTurning(totalPages, targetPage) {
  const fromStart = Math.floor(targetPage / 2);
  const fromEnd = Math.floor(totalPages / 2) - Math.floor(targetPage / 2);
  return Math.min(fromStart, fromEnd);
}
pageTurning(5, 4);
