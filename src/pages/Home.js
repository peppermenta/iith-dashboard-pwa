import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Divider } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: '3px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const useStyles2 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: 14,
  },
}));

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

function Home({
  Menu, schedule, events, loading, error,
}) {
  const [times, setTimes] = useState(null);
  const [start, setStart] = useState(0);
  const [open, setOpen] = useState(false);
  const activeStep = new Date().getDay();
  const classes = useStyles();
  const classes2 = useStyles2();
  const hall = 'LDH';
  useEffect(() => {
    if (!error && !loading && schedule) {
      const date = new Date();
      const hours = date.getHours() + date.getMinutes() / 60;
      const buses = [];
      let check = 0;
      if (start === 0) {
        let timeSet = schedule.TOIITH.LINGAMPALLY.map((x) => x);
        if (date.getDay() === 0 || date.getDay() === 6) {
          timeSet = schedule.TOIITH.LINGAMPALLYW.map((x) => x);
        }
        for (let i = 0; i < timeSet.length; i += 1) {
          const index = timeSet[i].lastIndexOf(':');
          const hoursText = parseFloat(timeSet[i].substring(0, index))
            + parseFloat(timeSet[i].substring(index + 1, timeSet[i].length)) / 60;
          if (hoursText > hours) {
            check = 1;
            buses.push(timeSet[i]);
            break;
          }
        }
        if (check === 0) buses.push(timeSet[0]);
        check = 0;
        timeSet = schedule.TOIITH.LAB.map((x) => x);
        for (let i = 0; i < timeSet.length; i += 1) {
          const index = timeSet[i].lastIndexOf(':');
          const hoursText = parseFloat(timeSet[i].substring(0, index))
            + parseFloat(timeSet[i].substring(index + 1, timeSet[i].length)) / 60;
          if (hoursText > hours) {
            check = 1;
            buses.push(timeSet[i]);
            break;
          }
        }
        if (check === 0) buses.push(timeSet[0]);
        check = 0;
        timeSet = schedule.TOIITH.SANGAREDDY.map((x) => x);
        for (let i = 0; i < timeSet.length; i += 1) {
          const index = timeSet[i].lastIndexOf(':');
          const hoursText = parseFloat(timeSet[i].substring(0, index))
            + parseFloat(timeSet[i].substring(index + 1, timeSet[i].length)) / 60;
          if (hoursText > hours) {
            check = 1;
            buses.push(timeSet[i]);
            break;
          }
        }
        if (check === 0) buses.push(timeSet[0]);
        check = 0;
      } else {
        let timeSet = schedule.FROMIITH.LINGAMPALLY.map((x) => x);
        if (date.getDay() === 0 || date.getDay() === 6) {
          timeSet = schedule.FROMIITH.LINGAMPALLYW.map((x) => x);
        }
        for (let i = 0; i < timeSet.length; i += 1) {
          const index = timeSet[i].lastIndexOf(':');
          const hoursText = parseFloat(timeSet[i].substring(0, index))
            + parseFloat(timeSet[i].substring(index + 1, timeSet[i].length)) / 60;
          if (hoursText > hours) {
            check = 1;
            buses.push(timeSet[i]);
            break;
          }
        }
        if (check === 0) buses.push(timeSet[0]);
        check = 0;
        timeSet = schedule.FROMIITH.LAB.map((x) => x);
        for (let i = 0; i < timeSet.length; i += 1) {
          const index = timeSet[i].lastIndexOf(':');
          const hoursText = parseFloat(timeSet[i].substring(0, index))
            + parseFloat(timeSet[i].substring(index + 1, timeSet[i].length)) / 60;
          if (hoursText > hours) {
            check = 1;
            buses.push(timeSet[i]);
            break;
          }
        }
        if (check === 0) buses.push(timeSet[0]);
        check = 0;
        timeSet = schedule.FROMIITH.SANGAREDDY.map((x) => x);
        for (let i = 0; i < timeSet.length; i += 1) {
          const index = timeSet[i].lastIndexOf(':');
          const hoursText = parseFloat(timeSet[i].substring(0, index))
            + parseFloat(timeSet[i].substring(index + 1, timeSet[i].length)) / 60;
          if (hoursText > hours) {
            check = 1;
            buses.push(timeSet[i]);
            break;
          }
        }
        if (check === 0) buses.push(timeSet[0]);
        check = 0;
      }
      setTimes(buses);
    }
  }, [schedule, start, setTimes, error, loading]);

  const getMeal = (meal) => {
    const listItems = Menu[hall][days[activeStep]][meal];
    const additionalKey = `${hall} Additional`;
    const extraItems = Menu[additionalKey][days[activeStep]][meal];
    return (
      <Box>
        <div>
          <Box ml={0.5}>{listItems.join(', ')}</Box>
          <Divider />
          <div>
            <Box fontWeight="fontWeightMedium" mt={0.5}>
              Extras
            </Box>
          </div>
          <Box ml={0.5}>
            {extraItems.map((item) => (
              <Typography>{item}</Typography>
            ))}
          </Box>
        </div>
      </Box>
    );
  };

  const getEvents = () => {
    const today = new Date();
    const currentEvents = [];
    for (let i = 0; i < events.length; i += 1) {
      const event = events[i];
      let eventDate = new Date();
      eventDate.setHours(0, 0, 0);
      let endDate = new Date();

      if (event?.startTime) {
        // recurring Event.
        if (!event.daysOfWeek.includes(today.getDay())) {
          // event does not occur on given Day
          eventDate = new Date(0); // hacky fix
        } else if (
          event.startRecur
          && Date.parse(event.startRecur) > today.getTime()
        ) {
          // event has not started yet
          eventDate = new Date(event.startRecur);
        } else if (
          event.endRecur
          && Date.parse(event.endRecur) <= today.getTime()
        ) {
          // event has already ended
          eventDate = new Date(event.endRecur);
        }
        // set the Time for eventDate and endDate. Works only for HH:MM:SS
        const eventStart = event.startTime.split(':');
        const eventEnd = event.endTime.split(':');

        eventDate.setHours(eventStart[0], eventStart[1], eventStart[2]);
        endDate.setHours(eventEnd[0], eventEnd[1], eventEnd[2]);
      } else {
        // normal Event
        eventDate = new Date(event.start);
        endDate = new Date(event.end);
      }
      if (eventDate && eventDate.toDateString() === today.toDateString()) {
        const newEvent = { title: event.title, timestamp: '' };
        if (eventDate.toDateString() === endDate.toDateString()) {
          newEvent.timestamp = `${eventDate.getHours().toString()}:${
            eventDate.getMinutes().toString() === '0'
              ? '00'
              : eventDate.getMinutes().toString()
          } - ${endDate.getHours().toString()}:${
            endDate.getMinutes().toString() === '0'
              ? '00'
              : endDate.getMinutes().toString()
          }`;
        }
        currentEvents.push(newEvent);
      }
    }
    if (currentEvents.length === 0) {
      return (
        <div>
          <Typography>Plenty of time to spare!</Typography>
        </div>
      );
    }
    return (
      <div>
        <ul>
          {currentEvents.map((item) => (
            <li>
              <Typography>{`${item.title} ${item.timestamp}`}</Typography>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  const toggleStart = (event) => {
    if (event.target.value === '0') setStart(0);
    else setStart(1);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const getMealKey = () => {
    const date = new Date();
    const hours = date.getHours() + date.getMinutes() / 60;
    if (hours >= 10 && hours <= 15) return 'Lunch';
    if (hours >= 15 && hours <= 18.5) return 'Snacks';
    if (hours >= 18.5 && hours <= 22.5) return 'Dinner';
    return 'Breakfast';
  };
  const mealKey = getMealKey();

  if (error) {
    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      >
        <h2>Error. Please try again later</h2>
        <Button color="primary" onClick={window.location.reload}>
          Reload
        </Button>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <Card
        className={classes.root}
        onClick={() => {
          if (window.location.pathname !== '/timetable') window.location.assign(`${window.location.href}timetable`);
        }}
        style={{ marginBottom: '10px' }}
      >
        <CardContent>
          <Typography variant="h6">Today&apos;s Agenda</Typography>
          <Typography>{getEvents()}</Typography>
        </CardContent>
      </Card>
      <Card
        className={classes.root}
        onClick={() => {
          if (window.location.pathname !== '/mess') window.location.assign(`${window.location.href}mess`);
        }}
        style={{ marginBottom: '10px' }}
      >
        <CardContent>
          <Typography variant="h6">
            Today&apos;s
            {` ${mealKey}`}
          </Typography>
          <Typography>{getMeal(mealKey)}</Typography>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography>
            <Grid
              container
              spacing={0}
              style={{ padding: '10px' }}
              className={classes2.root}
              alignItems="center"
            >
              <Grid item xs={6} container alignItems="center">
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  bgcolor="background.paper"
                  alignItems="center"
                  onClick={() => {
                    if (window.location.pathname !== '/bus') window.location.assign(`${window.location.href}bus`);
                  }}
                >
                  <Typography variant="h6">EV schedule</Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                container
                justifyContent="flex-end"
                alignitems="center"
              >
                <Box
                  display="flex"
                  bgcolor="background.paper"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={start}
                    onChange={toggleStart}
                  >
                    <MenuItem value="0">FROM IITH</MenuItem>
                    <MenuItem value="1">TO IITH</MenuItem>
                  </Select>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={0}
              className={classes2.root}
              onClick={() => {
                if (window.location.pathname !== '/bus') window.location.assign(`${window.location.href}bus`);
              }}
            >
              <Grid item xs={4}>
                <Paper className={classes2.paper}>
                  <Box fontWeight="fontWeightMedium">Lingampally</Box>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes2.paper}>
                  <Box fontWeight="fontWeightMedium">MainGate</Box>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes2.paper}>
                  <Box fontWeight="fontWeightMedium">Sangareddy</Box>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes2.paper}>
                  {times != null ? times[0] : 'loading'}
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes2.paper}>
                  {times != null ? times[1] : 'loading'}
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes2.paper}>
                  {times != null ? times[2] : 'loading'}
                </Paper>
              </Grid>
            </Grid>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

Home.propTypes = {
  // eslint-disable-next-line
  Menu: PropTypes.objectOf(PropTypes.object),
  // eslint-disable-next-line
  schedule: PropTypes.objectOf(PropTypes.object),
  // eslint-disable-next-line
  events: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

Home.defaultProps = {
  Menu: {},
  schedule: {},
  events: [],
  loading: true,
  error: false,
};

export default Home;

// TODO: Date Refactoring
// Replace multicomparisons with toDateString() comparisons
// For recursive events, do a check for "startTime", and then daysofWeek()
