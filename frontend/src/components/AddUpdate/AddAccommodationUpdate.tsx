import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {putTrip} from "../../service/api-service";
import {Accommodation, Trip} from "../../model/Trip";

type AddAccommodationUpdateProps = {
    trip: Trip

}

export default function AddAccommodationUpdate({trip}: AddAccommodationUpdateProps) {
    const navigate = useNavigate()
    const [additionalNights, setAdditionalNights] = useState<number>(0)
    const [typeOfAccommodation, setTypeOfAccommodation] = useState<string>(``)

    const onUpdate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const updatedTrip = {...trip}

        const newAccommodation: Accommodation = {
            typeOfAccommodation: typeOfAccommodation,
        }

        updatedTrip.accommodations.push(newAccommodation);

        putTrip(updatedTrip)
            .then(() => {
                setAdditionalNights(0)
                setTypeOfAccommodation(``)
                navigate(`/`)
            })
            .catch(console.error)
    }
    return (
        <form className={"update-Accommodation"} onSubmit={onUpdate}>
            <label className="label-input-update">Additional Nights: <input className="number-field" type="number"
                                                                            placeholder="Add your additional Nights."
                                                                            min="0"
                                                                            step="1" value={additionalNights}
                                                                            onChange={event => setAdditionalNights(Number(event.target.value))}/>
            </label>
            <label className="label-input-update">Type of Accommodation: <input list="accommodations"
                                                                                className="text-field"
                                                                                type="typeOfAccommodation"
                                                                                placeholder="Choose your Type of Accommodation."
                                                                                value={typeOfAccommodation}
                                                                                onChange={event => setTypeOfAccommodation(event.target.value)}/>
            </label>
            <datalist className="dataList-input-update" id="accommodations">
                <option value="Hotel"/>
                <option value="House"/>
                <option value="Apartment"/>
                <option value="Youth Hostel"/>
                <option value="Camping Site"/>
                <option value="Cruise Ship"/>
            </datalist>
            <button className={"update-accommodation"}>Update</button>
        </form>
    )
}