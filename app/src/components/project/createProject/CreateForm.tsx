import React from 'react';
import { InputGroup, Form, Button, FormControl, Col } from 'react-bootstrap'


function CreateForm(props) {
    return (
        <div>
            <Form>
                <Form.Group controlId="formGuardianAddress">
                    <Form.Label>Guardian Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Eth Address" />
                    <Form.Text className="text-muted">
                        This address will control emergency powers for the contract.
        </Form.Text>
                </Form.Group>

                <Form.Group controlId="formGovernorContractName">
                    <Form.Label>Governor Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Governor name" />
                    <Form.Text className="text-muted">
                        This is the contract name.
    </Form.Text>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridDelay">
                        <Form.Label>Delay</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDelayTimeUnit">
                        <Form.Label>DelayTimeUnit</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Minute</option>
                            <option>Hour</option>
                            <option>Day</option>
                            <option>Month</option>
                            <option>Year</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridGracePeriod">
                        <Form.Label>Grace Period</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridGracePeriodTimeUnit">
                        <Form.Label>GracePeriodTimeUnit</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Minute</option>
                            <option>Hour</option>
                            <option>Day</option>
                            <option>Month</option>
                            <option>Year</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridMinimumDelay">
                        <Form.Label>Minimum Delay</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridMinimumDelayTimeUnit">
                        <Form.Label>MinimumDelayTimeUnit</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Minute</option>
                            <option>Hour</option>
                            <option>Day</option>
                            <option>Month</option>
                            <option>Year</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridMaximumDelay">
                        <Form.Label>Maximum Delay</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridMaximumDelayTimeUnit">
                        <Form.Label>MaximumDelayTimeUnit</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Minute</option>
                            <option>Hour</option>
                            <option>Day</option>
                            <option>Month</option>
                            <option>Year</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formTokenName">
                    <Form.Label>Voting Token Name</Form.Label>
                    <Form.Control type="text" placeholder="MyVotingToken" />
                </Form.Group>
                <Form.Group controlId="formTokenSymbol">
                    <Form.Label>Voting Token Symbol</Form.Label>
                    <Form.Control type="text" placeholder="MVT" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
            </div>
    );
}

export default CreateForm;