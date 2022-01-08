class Book {
    constructor (author,title,genre,dateRead){
        this.author = author
        this.title = title
        this.genre = genre
        this.dateRead = dateRead
    }
}


class Library{   
    constructor(currentBook,nextBook,lastBook){
        this.lastBook = lastBook.map(i=>i+ ' -read')
        this.currentBook = currentBook
        this.nextBook = nextBook
        this.listBooks = [...currentBook,...nextBook,...lastBook]
    }
    get readCount(){
        return `Total Books read: ${this.lastBook.length}`
    }
    get unReadCount(){
            return `Total Books to read: ${this.nextBook.length}`
    }
    finishCurrentBook(){
        this.lastBook.unshift(...this.currentBook.map(i=>i+ ' -read'));
        this.currentBook = []
        this.currentBook.unshift(this.nextBook[0])
        this.nextBook.shift()
    }
    add(book){
       this.nextBook.push(book)
    }
}

let myLibrary = new Library (
    currentBook= ["Into the Magic Shop"], 
    nextBook = ['Ego is the Enemy','Bourne'], 
    lastBook = ['The Great Gatsby','Little Women'])

myLibrary.finishCurrentBook();
console.log(myLibrary.lastBook)
console.log(myLibrary.currentBook)
console.log(myLibrary.nextBook)
myLibrary.add('Harry Potter')
console.log(myLibrary.listBooks)
console.log(myLibrary.readCount)
console.log(myLibrary.nextBook)



const book  = [
    new Book ('David Goggins',"Can't Hurt Me",'Biography',''),
    new Book ('Ryan Holiday','Ego is the Enemy','Self-Help',''),
    new Book ('Jon Duckeett','Javascript and JQuery','Educational',''),
    new Book ('Mitch Albom','Tuesdays with Morrie','Biographical-Fiction','' ),
    new Book ('Jeff Kinney','Diary of a Wimpy Kid','Comedy',''),
    new Book ('Jeff Kinney','Diary of a Wimpy Kid','Comedy','')
];




