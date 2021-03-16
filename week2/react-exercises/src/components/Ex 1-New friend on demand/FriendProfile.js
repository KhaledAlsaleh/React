
const FriendProfile = ({props}) => {
    return (  
        <div className='container'>
            <ul id='friendInfo'>
                {/* <li><span>Full Name: </span>{props.name.title} {props.name.first} {props.name.last}</li> */}
                {/* <li><span>Country & City: </span>{props.location.country}, {props.location.city}</li> */}
                {/* <li><span>Address: </span>{props.location.street.name} {props.location.street.number}, {props.location.postcode}</li> */}
                <li><span>Email Address: </span>{props.email}</li>
                <li><span>Phone Number: </span>{props.phone}</li>
            </ul>
            {/* <img className='friendImage' src={props.picture.large} alt='friendImage'/> */}
        </div>
    );
};

export default FriendProfile;


// We can create list components called (FriendDetails) also and use it instead of li (like what we did in week1 homework)
