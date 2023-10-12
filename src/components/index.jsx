import { useUserContext } from "../useContext"


export const Profile = () => {
    const user = useUserContext();

    return <h1>{user.name}</h1>
}


export const Sidebar = () => {
    const user = useUserContext();

    return <h1>{user.isPremium ? "premium active" : "premium passive"}</h1>
}