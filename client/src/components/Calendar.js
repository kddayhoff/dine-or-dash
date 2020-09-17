import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { createEventId } from './Events';
import axios from 'axios';

export default class CalApp extends React.Component {
	state = {
		weekendsVisible: true,
		currentEvents: [],
		event: [],
	};

	componentDidMount() {
		axios.get('/dashboard/goals').then((res) => {
			this.setState({ event: res.data.goals });
			console.log({ event: res.data.goals });
		});
	}

	render() {
		return (
			<div className='cal-app'>
				{this.renderSidebar()}
				<div className='cal-app-main'>
					<FullCalendar
						plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
						headerToolbar={{
							left: 'prev,next today',
							center: 'title',
							right: 'dayGridMonth,timeGridWeek,timeGridDay',
						}}
						initialView='dayGridMonth'
						editable={true}
						selectable={true}
						selectMirror={true}
						dayMaxEvents={true}
						weekends={this.state.weekendsVisible}
						initialEvents={this.state.event} // alternatively, use the `events` setting to fetch from a feed
						events={this.state.event}
						select={this.handleDateSelect}
						eventContent={renderEventContent} // custom render function
						eventClick={this.handleEventClick}
						eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
					/>
				</div>
			</div>
		);
	}

	renderSidebar() {
		return (
			<div className='cal-app-sidebar'>
				{/* <div className='cal-app-sidebar-section'>
					<h2>Instructions</h2>
					<ul>
						<li>Select dates and you will be prompted to create a new event</li>
						<li>Drag, drop, and resize events</li>
						<li>Click an event to delete it</li>
					</ul>
				</div> */}
				<div className='cal-app-sidebar-section'>
					<label>
						<input
							type='checkbox'
							checked={this.state.weekendsVisible}
							onChange={this.handleWeekendsToggle}></input>
						toggle weekends
					</label>
				</div>
			</div>
		);
	}

	handleWeekendsToggle = () => {
		this.setState({
			weekendsVisible: !this.state.weekendsVisible,
		});
	};

	handleDateSelect = (selectInfo) => {
		let title = prompt('Please enter a new title for your event');
		let calendarApi = selectInfo.view.calendar;

		calendarApi.unselect(); // clear date selection

		if (title) {
			calendarApi.addEvent({
				id: createEventId(),
				title,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay,
			});
			axios
				.post('/dashboard/goals', title)
				.then((res) => {
					console.log(res.data.goal);
				})
				.catch((error) => {
					console.log(error);
				});
			this.setState({ id: '', title: '', start: '', end: '', allDay: '' });
		}
	};

	handleEventClick = (clickInfo, res) => {
    const {id} = clickInfo.event._def.extendedProps._id
    console.log(clickInfo.event._def.extendedProps._id);
		if (
			window.confirm(
				`Are you sure you want to delete the event '${clickInfo.event.title}'`
			)
		) {
      clickInfo.event.remove();
      axios.delete('/dashboard/goals', {
      params: {id}})
      .then((res) => {
        console.log(res.data.goal);
      })}
		
	};

	handleEvents = (event) => {
		this.setState({
			currentEvents: event,
		});
	};
}

function renderEventContent(eventInfo) {
	return (
		<>
			<b>{eventInfo.timeText}</b>
			<i>{eventInfo.event.title}</i>
		</>
	);
}
