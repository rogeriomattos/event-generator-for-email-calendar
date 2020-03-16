import React from 'react';
import PropTypes from 'prop-types';

export class AddEventGoogleButton extends React.Component {    
    
    render() {
        const {styles,textButton,className} = this.props;
        const link = this.buildLink();

        return (
            <a target={"target"} className={className} style={(className)?{}:styles.button} href={link}>{textButton}</a>
        );
    }

    buildLink = () => {
        return ("http://www.google.com/calendar/event?action=TEMPLATE"
                +"&text="+this.formatText(this.props.title)
                +"&dates="+this.formatDate(this.props.isAllDay,this.props.dateStart,this.props.dateEnd)
                +"&details="+this.formatText(this.props.description)
                +"&location="+this.formatText(this.props.location));
    }

    formatText = (text) => {
        return text.replace(" ","+");
    }  
    
    formatDate = (isAllDay,dateStart,dateEnd) =>{
        var start ="", end="";
        
        if(isAllDay){
            start = this.toGoogleFormat(dateStart);
            dateStart.setDate(dateStart.getDate()+1);
            
            end = this.toGoogleFormat(dateStart);

            start = start.split("T")[0];
            end = end.split("T")[0];
        }
        else{
            start = this.toGoogleFormat(dateStart);
            end = this.toGoogleFormat(dateEnd);
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
    isAllDay:true,
    target:"_blank",

    className:"",
    textButton:"Add to Google calendar",

    styles: {
        button: {
            padding:'10px',
            background: '#fff',
            border: '1px solid red',
            color:"#000",
            textDecoration:"none",
            display:"inline-block"
        }
    }
};

export default AddEventGoogleButton;