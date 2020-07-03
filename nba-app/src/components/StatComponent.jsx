import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import NbaDataService from '../api/stats/NbaDataService';

class StatComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            firstName: 'Larry',
            lastName: 'Bird',
            position: 'SF',
            team: 'Boston',
            ppg: 30
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount() {
        NbaDataService.retrieveNba(this.state.id)
            .then(response => this.setState({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                position: response.data.position,
                team: response.data.team,
                ppg: response.data.ppg
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.firstName) {
            errors.firstName = "Enter a First Name"
        } else if (values.firstName.length < 2) {
            errors.firstName = "Enter atleast 2 characters in the First Name"
        }

        if (!values.lastName) {
            errors.lastName = "Enter a Last Name"
        } else if (values.lastName.length < 2) {
            errors.lastName = "Enter atleast 2 characters in the Last Name"
        }

        if (!values.position) {
            errors.position = "Enter a position"
        } else if (values.position.length > 2) {
            errors.position = "Enter a valid position - 2 characters max"
        }

        if (!values.team) {
            errors.team = "Enter a team"
        } else if (values.team.length < 2) {
            errors.team = "Enter atleast 2 characters in the team"
        }

        if (!values.ppg) {
            errors.ppg = "Enter ppg"
        } else if (values.ppg.length > 4) {
            errors.ppg = "Enter a valid PPG - Ex) 20.1"
        }

        return errors;

    }
    onSubmit(values) {
        console.log(values);
    }
    render() {
        // let firstName = this.state.firstName
        // let lastName = this.state.lastName
        // let position = this.state.position
        // let team = this.state.team
        // let ppg = this.state.ppg
        let { firstName, lastName, position, team, ppg } = this.state

        return (<div>
            <h1>Stat</h1>
            <div className="container">
                <Formik
                    initialValues={{
                        firstName,
                        lastName,
                        position,
                        team,
                        ppg
                    }}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                >
                    {
                        (props) => (
                            <Form>
                                {/* Error Messages */}
                                <ErrorMessage name="firstName" component="div" className="alert alert-warning" />
                                <ErrorMessage name="lastName" component="div" className="alert alert-warning" />
                                <ErrorMessage name="position" component="div" className="alert alert-warning" />
                                <ErrorMessage name="team" component="div" className="alert alert-warning" />
                                <ErrorMessage name="ppg" component="div" className="alert alert-warning" />

                                <fieldset className="form-group">
                                    <label>First Name</label>
                                    <Field className="form-control" type="text" name="firstName" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>lastName Name</label>
                                    <Field className="form-control" type="text" name="lastName" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Position</label>
                                    <Field className="form-control" type="text" name="position" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Team</label>
                                    <Field className="form-control" type="text" name="team" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>PPG</label>
                                    <Field className="form-control" type="text" name="ppg" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>

            </div>
        </div>
        )
    }
}

export default StatComponent;