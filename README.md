# [React event generator for email calendar](https://www.npmjs.com/package/react-event-generator-for-email-calendar)

React event generator for email calendar is a component made in reactjs, it creates a button where the user can create an event in the calendar of his email account

## About this version 1.0.0
Currently, this version has only the Google Calendar component.

## Installation

Use the package manager npm to install foobar.

```
npm i react-event-generator-for-email-calendar
```

## Usage

```javascript
import React, {Component} from 'react';

import {AddEventGoogleButton} from 'react-event-generator-for-email-calendar';

export default class App extends Component{
    
    state = {
        title: "Simple Title",
        description:"Simple Description",
        location:"New York",
        startDate:new Date(),
        endDate:new Date(),
        allDay:true
    }
 
    render(){
        const {title,description,location,startDate,endDate,allDay} = this.state;
        return (      
            <AddEventGoogleButton 
            title={title} 
            description={description} 
            location={location}
            allDay={allDay}
            startDate={startDate}
            endDate={endDate}>
            </AddEventGoogleButton>
        );
    }
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)