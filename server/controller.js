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
        // indexToFind = element => {
        //     +id === +element.listID
        // }
        // listTitleToEdit = arrayOfLists.findIndex(indexToFind)
        // arrayOfLists[listTitleToEdit] = {
        //     listID: +id, 
        //     titleOfList: titleOfList
        // }
        arrayOfLists = arrayOfLists.map(individualList => {
            if (individualList.id === +id) {
                return {id, titleOfList}
            }
            return individualList
        })
        res.status(200).send(arrayOfLists)
    },

    deleteList(req, res) {
        let indexToFind = element => {
            return +element.listID === +req.params.id
        }
        listToDelete = arrayOfLists.findIndex(indexToFind);
        arrayOfLists.splice(listToDelete, 1)
        res.status(200).send(arrayOfLists)
    }
    // ,

    // createNewQuote (req, res) {

    // }
    
}