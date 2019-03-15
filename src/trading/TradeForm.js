import React from 'react'
import Form, { Col } from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

const TradeForm = ({ handleChange, handleSubmit, confirmSymbol }) => (
  <Form className="mx-3 mt-2">
    <Form.Label>Symbol</Form.Label>
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Symbol"
        name="ticker_symbol"
        onChange={handleChange}
      />
      <InputGroup.Append>
        <Button onClick={confirmSymbol} variant="outline-secondary">Confirm Symbol</Button>
      </InputGroup.Append>
    </InputGroup>

    <Form.Row>
      <Form.Group as={Col} className="mr-2">
        <Form.Label>Action</Form.Label>
        <Form.Control onChange={handleChange} name="action" as="select">
          <option>Buy</option>
          <option>Short</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Label>Quantity</Form.Label>
        <Form.Control name="size" type="number" onChange={handleChange}/>
      </Form.Group>
    </Form.Row>
    <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Place Order</button>
  </Form>
)

export default TradeForm