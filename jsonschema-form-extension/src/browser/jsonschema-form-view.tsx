import * as React from "react";

export interface Greeting {
    name: string,
    place: string
}
export class GreetingView extends React.Component<Greeting> {
    render(): JSX.Element {
        return <h1>Hello {this.props.name} at {this.props.place}!</h1>;
    }
}

export class JsonschemaFormView extends React.Component<{}, Greeting> {

    constructor(props: {}) {
        super(props);
        this.state = {
            name: 'World',
            place: 'Theia Workshop'
        }
    }

    render(): JSX.Element {
        // TODO: render a place of greeting:
        // - Add a new property `at` to `Greeting` of `string` type to define a place of greeting state.
        // - Initialize the default place of greeting as `Theia Workshop` in the constructor.
        // - Add a new property `updateAt` to update the place of greeting state. It should be implemented after `updateName` property.
        // - Render another input field for the place of greeting after the input field for name. Separate them by ` at ` string.
        return <React.Fragment>
            <GreetingView name={this.state.name} place={this.state.place} />
            Greet <input value={this.state.name} onChange={this.updateName} /> at <input value={this.state.place} onChange={this.updatePlace} />
        </React.Fragment>;
    }

    protected updateName = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({
        name: e.currentTarget.value
    });

    protected updatePlace = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({
        place: e.currentTarget.value
    });
}
