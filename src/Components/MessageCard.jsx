import { useDispatch } from "react-redux"
import { handleRead } from "../../store/Slice";

export default function MessageCard({ msg }) {
    const dispatch = useDispatch();
    return (
        <div className={`message ${msg.read && "active"} ${msg.current && "current"}`} onClick={() => dispatch(handleRead(msg.id))}>
            <div className="profile-image">F</div>
            <div className="email-info">
                <p>From: <span>{msg.from.name} {"<"}{msg.from.email}{">"} </span></p>
                <p>Subject: <span>{msg.subject}</span></p>
                <p className="description">{msg.short_description.substring(0, 40)}...</p>
                <div className="time">
                    <p>26/02/2020 10:30am</p>
                    {msg?.favorite &&
                        <small className="favorite">Favorite</small>
                    }
                </div>
            </div>
        </div>
    )
}