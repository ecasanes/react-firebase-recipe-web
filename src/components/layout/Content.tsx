import React from 'react'
import RecipeList from '../RecipeList'
import EditRecipe from '../EditRecipe';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

function Content() {

    let match = useRouteMatch();

    return (
        <div className="content">
            <Switch>
                <Route path={`/edit-recipe/:recipeId`}>
                    <EditRecipe />
                </Route>
                <Route path={match.path}>
                    <RecipeList />
                </Route>
            </Switch>
        </div>


    )
}

export default Content
