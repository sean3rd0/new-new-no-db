const arrayOfLists = [
    // {
    //     titleOfList: "Things to Always Remember", 
    //     listOfThings: [
    //         "I WANT to remember ALL THE TIME. ", 
    //         "\"Don't worry about a thing, 'cause every little thing 's gonna be alright.\" -Bob Marley", 
    //         "\"...and I don't want to go home.\" "
    //     ]
    // }
]
let listID = 1

module.exports = {
    displayAllLists (req, res) {
        res.status(200).send(arrayOfLists)
    },
    
    createNewList (req, res) {
        const newList = {
            listID: listID++, 
            titleOfList: "Title Here"
            // , 
            // listOfThings: ["Content here. ", "Second quote (test). "]
        };
        arrayOfLists.unshift(newList);
        res.status(200).send(arrayOfLists);
    },

    editListTitle (req, res) {
        let {titleOfList} = req.body;
        let {id} = req.params;
        arrayOfLists = arrayOfLists.map(individualList => {
            if (individualList.id === +id) {
                return {id, titleOfList}
            }
            return individualList
        })
    }
    // ,

    // createNewQuote (req, res) {

    // }
    
}