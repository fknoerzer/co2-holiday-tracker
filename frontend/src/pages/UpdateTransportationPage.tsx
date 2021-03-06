import AddTransportationUpdate from "../components/AddUpdate/AddTransportationUpdate";
import {Trip} from "../model/Trip";

type UpdateTransportationPageProps = {

    trip?:Trip
}

export default function UpdateTransportationPage({ trip}:UpdateTransportationPageProps) {

    return(
        <div className={"update-div"}>
            {trip&& <AddTransportationUpdate trip={trip}/>}
        </div>
    )
}