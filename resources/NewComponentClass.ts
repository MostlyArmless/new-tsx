import * as React from 'react';

interface NewComponentProps
{

}

interface NewComponentState
{

}

const initialState: NewComponentState = {

}

export class NewComponent extends React.Component<NewComponentProps, NewComponentState>
{
    constructor( props: NewComponentProps )
    {
        super( props );
        this.state = initialState;
    }

    render()
    {
        return (
            <>
            "NewComponent"
            < />
        );
    }
}