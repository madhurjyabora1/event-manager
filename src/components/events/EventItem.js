import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEvent } from '../../actions/events';
import {Card, Button} from 'react-bootstrap';
const EventItem = ({
  deleteEvent, 
  event: { id, title, place },
  
}) => (
  <div className='post bg-white p-1 my-1'>
    <Card>
    <Card.Body>
      <Card.Title>Event Name: {title.toUpperCase()}</Card.Title>
      <p className=''>Place: {place}
      </p>

      
        <Fragment>
            <Button
              onClick={() => deleteEvent(id)}
              type='button'
              className='btn btn-danger'
            >Delete
              
            </Button>
          
        </Fragment>
      
    </Card.Body>
    </Card>
  </div>
);



EventItem.propTypes = {
  event: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  
};



export default connect(
  null,
  { deleteEvent }
)(EventItem);