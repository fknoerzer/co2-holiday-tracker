import {useNavigate} from "react-router-dom";
import {FormEvent, useState} from "react";
import {TripUpdateShoppingEmissionsDto} from "../../model/updateDtos/TripUpdateShoppingEmissionsDto";
import {Shopping, Trip} from "../../model/Trip";
import {putTrip} from "../../service/api-service";

type AddShoppingUpdateProps = {
    trip: Trip
    updateShoppingEmissions: (id: string, tripUpdateShoppingEmissionsDto: TripUpdateShoppingEmissionsDto) => void
}

export default function AddShoppingUpdate({updateShoppingEmissions, trip}: AddShoppingUpdateProps) {
    const navigate = useNavigate()
    const [amountOfClothingItems, setAmountOfClothingItems] = useState<number>(0)
    const [amountOfElectronicItems, setAmountOfElectronicItems] = useState<number>(0)
    const [amountOfSouvenirItems, setAmountOfSouvenirItems] = useState<number>(0)
    const [customShoppingItem, setCustomShoppingItem] = useState<string>(``)
    const [customShoppingItemEmission, setCustomShoppingItemEmission] = useState<number>(0)
    const [amountOfCustomShoppingItem, setAmountOfCustomShoppingItem] = useState<number>(0)

    const onUpdate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const updatedTrip = Object.assign({}, trip)


        const newShopping: Shopping = {
            amountOfClothingItems: amountOfClothingItems,
            amountOfElectronicItems: amountOfElectronicItems,
            amountOfSouvenirItems: amountOfSouvenirItems,
            customShoppingItem: customShoppingItem,
            customShoppingItemEmission: customShoppingItemEmission,
            amountOfCustomShoppingItem: amountOfCustomShoppingItem,
        }

        updatedTrip.shoppings.push(newShopping)


        putTrip(updatedTrip)
            .then(() => {
        setAmountOfClothingItems(0)
        setAmountOfElectronicItems (0)
        setAmountOfSouvenirItems(0)
        setCustomShoppingItem (``)
        setCustomShoppingItemEmission(0)
        setAmountOfCustomShoppingItem(0)
        navigate('/')
            })
            .catch(console.error)
    }
    return (
        <form className={"add-update-shopping"} onSubmit={onUpdate}>
            <label className="label-input-update"> Number of Clothing Items: <input className="number-field"
                                                                                     type="number"
                                                                                     placeholder="Add Amount of additional bought Clothes"
                                                                                     min="1" step="1"
                                                                                     value={amountOfClothingItems}
                                                                                     onChange={event => setAmountOfClothingItems(Number(event.target.value))}/>
            </label>
            <label className="label-input-update">Number of Electric Items: <input className="number-field"
                                                                                    type="number"
                                                                                    placeholder="Add Amount of additional bought Electronic Devices"
                                                                                    min="1" step="1"
                                                                                    value={amountOfElectronicItems}
                                                                                    onChange={event => setAmountOfElectronicItems(Number(event.target.value))}/>
            </label>
            <label className="label-input-update">Number of Souvenirs: <input className="number-field"
                                                                               type="number"
                                                                               placeholder="Add Amount of additional bought small Souvenirs"
                                                                               min="0" step="1"
                                                                               value={amountOfSouvenirItems}
                                                                               onChange={event => setAmountOfSouvenirItems(Number(event.target.value))}/>
            </label>
            <label className="label-input-update">Custom Shopping Item: <input className="text-field"
                                                                                type="customShoppingItem"
                                                                                placeholder="Add an additional Custom Shopping Item"
                                                                                value={customShoppingItem}
                                                                                onChange={event => setCustomShoppingItem(event.target.value)}/>
            </label>
            <label className="label-input-update"> Amount of Custom Shopping Item: <input className="number-field"
                                                                                           type="number"
                                                                                           placeholder="Add Amount of additional bought Custom Shopping Items"
                                                                                           min="1" step="1"
                                                                                           value={amountOfCustomShoppingItem}
                                                                                           onChange={event => setAmountOfCustomShoppingItem(Number(event.target.value))}/>
            </label>
            <label className="label-input-update"> Emissions of Custom Shopping Item: <input className="number-field"
                                                                                              type="number"
                                                                                              placeholder="Add Emissions of your additional Custom Shopping Item"
                                                                                              min="0" step="0.1"
                                                                                              value={customShoppingItemEmission}
                                                                                              onChange={event => setCustomShoppingItemEmission(Number(event.target.value))}/>
            </label>
        </form>
    )
}