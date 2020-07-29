import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventItem from './EventItem';
import EventForm from './EventForm';
import { getEvents } from '../../actions/events';

import {Container} from 'react-bootstrap'
const Events = ({ getEvents, event: { events } }) => {
  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <Fragment>
        <Container>
      <h1 className="large text-primary">FindMyEvent</h1>
      <p className="lead">
        Create Your Events
      </p>
      <EventForm />
      <div>
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
      </Container>
    </Fragment>
  );
};

Events.propTypes = {
  getEvents: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  event: state.events
});

export default connect(mapStateToProps, { getEvents })(Events);