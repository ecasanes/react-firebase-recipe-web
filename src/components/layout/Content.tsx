import React, {useState} from 'react'
import RecipeList from '../RecipeList'
import { CURRENT_PAGE } from '../../constants';
import EditRecipe from '../EditRecipe';

function Content() {

    const [currentPage, setCurrentPage] = useState(CURRENT_PAGE.RECIPE_LIST);

    return (
        <section className="content">
            {currentPage && 
                currentPage === CURRENT_PAGE.RECIPE_LIST && 
                (<RecipeList setCurrentPage={setCurrentPage} />)
            }
            {currentPage && 
                currentPage === CURRENT_PAGE.EDIT_RECIPE &&
                (<EditRecipe setCurrentPage={setCurrentPage} />)}
        </section>
    )
}

export default Content
