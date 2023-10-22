import { Link, useSearchParams } from "react-router-dom";

export default function Navbar() {
    const [searchParams] = useSearchParams();
    const emails = searchParams.get('emails');
    return (
        <nav>
            <p>Filter By:</p>
            <div className="filter--wrapper">
                <Link className={emails === null ? "active" : ""} to="/">Unread</Link>
                <Link className={emails === "read" ? "active" : ""} to="/?emails=read">Read</Link>
                <Link className={emails === "favorites" ? "active" : ""} to="/?emails=favorites">Favorites</Link>
            </div>
        </nav>
    )
}