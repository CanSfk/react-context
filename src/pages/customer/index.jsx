import Dashborad from "../../dashboard";
import { CustomerContext } from "../../useContext";

export const user = {
    name: "can",
    isPremium: false
}

export default function Customer() {
    return <CustomerContext.Provider value={user}><Dashborad /></CustomerContext.Provider>
}