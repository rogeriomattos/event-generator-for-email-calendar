import React from 'react';
import PropTypes from 'prop-types';

export class AddEventGoogleButton extends React.Component {    
    
    render() {
        const link = "http://www.google.com/calendar/event?action=TEMPLATE"
                    +"&text="+this.formatText(this.props.title)
                    +"&dates="+this.formatDate(this.props.isAllDay,this.props.dateStart,this.props.dateEnd)
                    +"&details="+this.formatText(this.props.description)
                    +"&location="+this.formatText(this.props.location);

        return (
            <a href={link}>Add event google</a>
        );
    }

    formatText = (text) => {
        return text.replace(" ","+");
    }  
    
    formatDate = (isAllDay,dateStart,dateEnd) =>{
        var start ="", end="";
        
        if(dateStart)
            start = this.toGoogleFormat(dateStart);
        
        if(!isAllDay  && dateEnd)
            end = this.toGoogleFormat(dateEnd);
        else{
            
            dateStart.setDate(dateStart.getDate()+1)
            end = this.toGoogleFormat(dateStart);
        }
        return start + "/" + end;
    }

    toGoogleFormat = (dateProp) =>{

        var iso = dateProp.toISOString();
        iso = iso.replace(".000","");
        iso = iso.replace(/[^a-zA-Z0-9]/g, "");
        
        return (iso).slice(0,15)+'Z';
    }
}


AddEventGoogleButton.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    dateStart: PropTypes.instanceOf(Date),
    dateEnd: PropTypes.instanceOf(Date),
    isAllDay:PropTypes.bool
};

AddEventGoogleButton.defaultProps = {
    title: "",
    description: "",
    location: "",
    dateStart:new Date(),
    isAllDay:true
};

export default AddEventGoogleButton;