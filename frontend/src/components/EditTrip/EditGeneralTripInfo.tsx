import "../../styles/AddNewTrip.css"

type EditGeneralInfoProps = {
    title: string
    setTitle: (value: string) => void
    distance: number
    setDistance: (value: number) => void
    destinationCountry: string
    setDestinationCountry: (value: string) => void
    travellerAmount: number
    setTravellerAmount: (value: number) => void
    dateOfDeparture: string
    setDateOfDeparture: (value: string) => void
    dateOfReturning: string
    setDateOfReturning: (value: string) => void
    personalBudget: number
    setPersonalBudget: (value: number) => void
}

export default function EditGeneralTripInfo({
                                                title,
                                                setTitle,
                                                destinationCountry,
                                                setDestinationCountry,
                                                travellerAmount,
                                                setTravellerAmount,
                                                dateOfDeparture,
                                                setDateOfDeparture,
                                                dateOfReturning,
                                                setDateOfReturning,
                                                personalBudget,
                                                setPersonalBudget
                                            }: EditGeneralInfoProps) {


    return (
        <div className={"add-new-trip-input-overview"}>
            <h1>Please edit the general infos about your trip</h1>
            <label className="label-input-field">
                <h3> Please choose a title for your new trip </h3>
                <input className="text-field" type="text"
                       placeholder="Add title"
                       value={title}
                       onChange={event => setTitle(event.target.value)}/>
            </label>
            <label className="label-input-field">
                <h3> Which country are you visiting?</h3>
                <input className="text-field"
                       type="text"
                       placeholder="Add Country"
                       value={destinationCountry}
                       onChange={event => setDestinationCountry(event.target.value)}/>
            </label>

            <label className="label-input-field">
                <h3> How big is your travel group?</h3>
                <input className="number-field"
                       type="number"
                       min="1" step="1"
                       value={travellerAmount}
                       onChange={event => setTravellerAmount(Number(event.target.value))}/> person(s)
            </label>

            <label className="label-input-field">
                <h3> Please enter your travel dates</h3>
                <div className={"dates-div"}>
                    <h4>Start Date</h4>
                    <input className="date-field"
                           type="date"
                           value={dateOfDeparture}
                           onChange={event => setDateOfDeparture(event.target.value)}/>
                    <h4>End Date</h4>
                    <input className="date-field"
                           min={dateOfDeparture}
                           type="date"
                           value={dateOfReturning}
                           onChange={event => setDateOfReturning(event.target.value)}/>
                </div>
            </label>

            <label className="label-input-field">
                <h3> Please set your personal CO<sub>2</sub> budget for your trip</h3>
                <input className="number-field" type="number"
                       placeholder="Add your personal CO2-Budget for this Trip"
                       min="0"
                       step="10" value={personalBudget}
                       onChange={event => setPersonalBudget(Number(event.target.value))}/> kg CO<sub>2</sub>-eq.
            </label>
        </div>)
}