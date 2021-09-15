import React, { Component } from 'react';

export default class Footer extends Component {

    constructor(props) {
        super(props);

        this.eventName = this.eventName.bind(this);
        this.eventColor = this.eventColor.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            name: '',
            color: '',
        }        
    }

    // Event handlers
    eventName(event) {
        this.setState({ name: event.target.value });
        localStorage.setItem('name', event.target.value);
    }

    eventColor(event) {
        this.setState({ color: event.target.value });
        localStorage.setItem('color', event.target.value);
    }

    onFormSubmit(event) {
      event.preventDefault();
      alert('Dina inställningar är sparade.');
      window.location.reload();
    }

    componentDidMount() {
        if (localStorage.getItem('color')) {
            this.setState({ color: localStorage.getItem('color') });
        }
        if (localStorage.getItem('name')) {
            this.setState({ name: localStorage.getItem('name') });
        }   
    }

    render() {
        return (
            <footer className={this.state.color}>
                 <div className="outer-wrapper">
                     <div className="inner-wrapper">
                        <form onSubmit={this.onFormSubmit}>
                        <h3>Dina inställningar</h3>
                            <div className="name-wrapper">
                                <label for="Name"><strong>Namn</strong></label>
                                <input id="Name" name="name" type="text" className="form-control" value={this.state.name} onChange={this.eventName} />
                            </div>
                            <p class="radio-heading">Färgval</p>
                            <div className="radio">
                            
                                <label><input type="radio" value="blue" checked={this.state.color === "blue"} onChange={this.eventColor} />
                                    Blå
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value="green"
                                    checked={this.state.color === "green"}
                                    onChange={this.eventColor}
                                    />
                                    Grön
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input
                                    type="radio"
                                    value="pink"
                                    checked={this.state.color === "pink"}
                                    onChange={this.eventColor}
                                    />
                                    Rosa
                                </label>
                            </div>
                            <p class="description">
                                Den valda färgen slår igenom på hela webbsidan när du sparat.
                            </p>
                            <div className="submit-wrapper">
                                <button type="submit">Spara</button>
                            </div>
                        </form>
                      </div>
                  </div>
                
            </footer>
        )
    }

}


