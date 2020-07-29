  import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/events';
import {Form, Col} from 'react-bootstrap'
const EventForm = ({ createEvent }) => {
  const [id, setId] = useState('');
  const [place, setPlace] = useState('');
  const [title, setTitle] = useState('')
  return (
    <div className='post-form'>
      
      <Form
        className='mb-3'
        onSubmit={e => {
          e.preventDefault();
          createEvent({ id, title, place });
          setId('');
          setPlace('');
          setTitle('');
        }}
      >
          <Form.Row>
          <Form.Group as={Col}>
          <Form.Label>ID
        <Form.Control
          type="text"
          name='id'
          value={id}
          onChange={e => setId(e.target.value)}
          required
        />
        </Form.Label>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Title
        <Form.Control
          type="text"
          name='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        </Form.Label>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Place name
        <Form.Control
          type="text"
          name='place'
          value={place}
          onChange={e => setPlace(e.target.value)}
          required
        />
        </Form.Label>
        </Form.Group>

       

        </Form.Row>
        <Form.Group as={Col}>
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
        
        </Form.Group>
      </Form>
    </div>
  );
};

EventForm.propTypes = {
  createEvent: PropTypes.func.isRequired
};

export default connect(
  null,
  { createEvent }
)(EventForm);