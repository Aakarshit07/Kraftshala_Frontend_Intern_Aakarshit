export const API_ID = "de1cfcc32a851c7e06124b414cd903f1";

export const iconUrl = "http://openweathermap.org/img/wn/";
  
export const getFormattedDateTime = () => {
    const date = new Date();
    
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'pm' : 'am';
    
    hours = hours % 12 || 12; // Adjust hours to 12-hour format and replace '0' with '12'
    
    return `${month} ${day}, ${hours}:${minutes}${ampm}`;
};


