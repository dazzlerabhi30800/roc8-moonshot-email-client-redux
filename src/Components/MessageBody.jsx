import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setReadMessage } from "../../store/Slice";
import DOMPurify from 'dompurify';

export default function MessageBody() {
    const { readMessage } = useSelector(data => data.emailSlice);
    const dispatch = useDispatch();
    async function fetchReadItem() {
        const data = await fetch(`https://flipkart-email-mock.now.sh/?id=${readMessage.id}`);
        const response = await data.json();
        if (!response) return;
        dispatch(setReadMessage({ ...readMessage, body: response.body }));
    }
    console.log(readMessage);

    useEffect(() => {
        if (readMessage.id) {
            fetchReadItem();
        }
    }, [readMessage.id])

    return (
        <section className="email-section message-body">
            <div className="profile-image message-img">F</div>
            <div className="message-info-wrapper">
                <div className="message-info-container">
                    <div className="message-info">
                        <h1>{readMessage?.from.name}</h1>
                        <p>{readMessage?.date}</p>
                    </div>
                    <button className="btn favorite-btn">Mark as favorite</button>
                </div>
                <div className="message-desc" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(readMessage?.body) }}></div>
            </div>

        </section>
    )
}
