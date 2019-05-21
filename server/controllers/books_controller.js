let books = [];
let id = 0;

module.exports = {
   read: (req, res) => {
      res.json(books);
   },
   create: (req, res) => {
      const {title, author} = req.body;
      books.push({
         title: title,
         author: author,
         id: id
      })
      id++;
      res.json(books);
   },
   update: (req, res) => {
      const {title, author} = req.body;
      const tgtId = req.params.id;
      const tgtIndex = books.findIndex( el => {
         return tgtId == el.id;
      })
      const book = books[tgtIndex];

      books[tgtIndex] = {
         title: title || book.title,
         author: author || book.author,
         id: book.id
      }
      res.json(books);
   },
   delete: (req, res) => {
      const tgtIndex = books.findIndex( el => {
         return el.id == req.params.id;
      })
      books.splice(tgtIndex, 1);
      res.json(books);
   }
}