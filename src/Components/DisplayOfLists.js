import React from "react";
import IndividualList from "./IndividualList";

const DisplayOfLists = (props) => {
    const {arrayOfLists} = props;
    const displayLists = arrayOfLists.map(individualList => {
        return (
          <IndividualList 
            key={individualList.listID} 
            listID={individualList.listID} 
            titleOfList={individualList.titleOfList}
          />
        // <div className="list-of-TTR" key={indexOfList}>
        //   <h2 className="title-of-list">{individualList.titleOfList} <button 
        //   className="edit-save-title-button" 
        //   // onClick={props.toggleTitleEdit}
        //   >
        //     edit / save
        //   </button>
        //   </h2>
        //   {/* <ul className="list-of-quotes">
        //     {individualList.listOfThings.map(
        //       (individualQuote, indexOfQuote) => {
        //         return(
        //           <li className="individual-quote" key={indexOfQuote}>
        //             {individualQuote} <button 
        //             className="edit-save-quote-button" 
        //             // onClick={props.toggleQuoteEdit()}
        //             >
        //               edit / save
        //             </button>
        //           </li>
        //         )
        //       }
        //     )}
        //   </ul> */}
        // </div>
        )
    })
    // console.log(displayLists)
    return(
        <div>
            {displayLists}
        </div>
    )
}

export default DisplayOfLists