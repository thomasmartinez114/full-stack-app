import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

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
    }

    render() {
        let firstName = this.state.firstName
        let lastName = this.state.lastName
        let position = this.state.position
        let team = this.state.team
        let ppg = this.state.ppg
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
                >
                    {
                        (props) => (
                            <Form>
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