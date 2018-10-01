import React from 'react';
import Mycomponent1, {Classname,Classname1} from './functional';
export class Test extends React.Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div>
                <Classname/>
                <Classname1/>
                <Mycomponent1/>
            </div>
        );
    }
}