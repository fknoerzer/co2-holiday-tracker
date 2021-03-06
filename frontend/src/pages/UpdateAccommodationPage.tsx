import AddAccommodationUpdate from "../components/AddUpdate/AddAccommodationUpdate";
import {Trip} from "../model/Trip";

type UpdateAccommodationPageProps = {
    trip:Trip
}

export default function UpdateAccommodationPage({trip}:UpdateAccommodationPageProps) {

    return(
        <div className={"update-div"}>
            {trip&& <AddAccommodationUpdate trip={trip}/>}
        </div>
    )
}