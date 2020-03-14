import React from 'react';

class AddEventGoogleButton extends React.Component {

    /*
    http://www.google.com/calendar/event?
    action=TEMPLATE
    &text=Summary+example
    &dates=20191204T030000Z/20191206T120000Z
    &details=Body+example
    &location=S%C3%A3o+Paulo
    
    "http://www.google.com/calendar/event?"+
            "action=TEMPLATE"+
            "&text="+event.summary+
            "&dates="+event.startDateTime+"/"+event.endDateTime+
            "&details="+event.body+
            "&location="+event.location;
    */
    render() {
        return (
            <a href="http://www.google.com/calendar/event?action=TEMPLATE&text=Summary+example&dates=20191204T030000Z/20191206T120000Z&details=Body+example&location=S%C3%A3o+Paulo">Add event google</a>
        );
    }
}
export default AddEventGoogleButton;