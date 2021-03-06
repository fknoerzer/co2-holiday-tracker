import {useNavigate} from "react-router-dom";
import {FormEvent, useContext, useState} from "react";
import {Shopping, Trip} from "../../model/Trip";
import {putTrip} from "../../service/api-service";
import {AuthContext} from "../../context/AuthProvider";

type AddShoppingUpdateProps = {
    trip: Trip
}

export default function AddShoppingUpdate({trip}: AddShoppingUpdateProps) {
    const navigate = useNavigate()
    const [amountOfClothingItems, setAmountOfClothingItems] = useState<number>(0)
    const [amountOfElectronicItems, setAmountOfElectronicItems] = useState<number>(0)
    const [amountOfSouvenirItems, setAmountOfSouvenirItems] = useState<number>(0)
    const [customShoppingItem, setCustomShoppingItem] = useState<string>(``)
    const [customShoppingItemEmission, setCustomShoppingItemEmission] = useState<number>(0)
    const [amountOfCustomShoppingItem, setAmountOfCustomShoppingItem] = useState<number>(0)
    const {token} = useContext(AuthContext)

    const onUpdate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const updatedTrip = {...trip}

        const newShopping: Shopping = {
            amountOfClothingItems: amountOfClothingItems,
            amountOfElectronicItems: amountOfElectronicItems,
            amountOfSouvenirItems: amountOfSouvenirItems,
            customShoppingItem: customShoppingItem,
            customShoppingItemEmission: customShoppingItemEmission,
            amountOfCustomShoppingItem: amountOfCustomShoppingItem,
        }

        updatedTrip.shoppings.push(newShopping)

        putTrip(updatedTrip, token)
            .then(() => {
                setAmountOfClothingItems(0)
                setAmountOfElectronicItems(0)
                setAmountOfSouvenirItems(0)
                setCustomShoppingItem(``)
                setCustomShoppingItemEmission(0)
                setAmountOfCustomShoppingItem(0)
                navigate('/')
            })
            .catch(console.error)
    }
    return (
        <form className={"add-form"} onSubmit={onUpdate}>
            <h1>Add more shopping emissions to your trip</h1>

            <label className="label-input-field">
                <h3 className="label-input-update"> Number of Clothing Items: </h3>
                <input className="number-field"
                       type="number"
                       placeholder="Add Amount of additional bought Clothes"
                       min="0" step="1"
                       value={amountOfClothingItems}
                       onChange={event => setAmountOfClothingItems(Number(event.target.value))}/>
            </label>
            <label className="label-input-field">
                <h3 className="label-input-update">Number of Electric Items:</h3>
                <input className="number-field"
                       type="number"
                       placeholder="Add Amount of additional bought Electronic Devices"
                       min="0" step="1"
                       value={amountOfElectronicItems}
                       onChange={event => setAmountOfElectronicItems(Number(event.target.value))}/>
            </label>
            <label className="label-input-field">
                <h3 className="label-input-update">Number of Souvenirs:</h3>
                <input className="number-field"
                       type="number"
                       placeholder="Add Amount of additional bought small Souvenirs"
                       min="0" step="1"
                       value={amountOfSouvenirItems}
                       onChange={event => setAmountOfSouvenirItems(Number(event.target.value))}/>
            </label>
            <label className="label-input-field">
                <h3 className="label-input-update">Custom Shopping Item:</h3>
                <input className="text-field"
                       type="customShoppingItem"
                       placeholder="Add an additional Custom Shopping Item"
                       value={customShoppingItem}
                       onChange={event => setCustomShoppingItem(event.target.value)}/>
            </label>
            <label className="label-input-field">
                <h3 className="label-input-update"> Amount of Custom Shopping Item:</h3>
                <input className="number-field"
                       type="number"
                       placeholder="Add Amount of additional bought Custom Shopping Items"
                       min="0" step="1"
                       value={amountOfCustomShoppingItem}
                       onChange={event => setAmountOfCustomShoppingItem(Number(event.target.value))}/>
            </label>
            <label className="label-input-field">
                <h3 className="label-input-update"> Emissions of Custom Shopping Item:</h3>
                <input className="number-field"
                       type="number"
                       placeholder="Add Emissions of your additional Custom Shopping Item"
                       min="0" step="0.1"
                       value={customShoppingItemEmission}
                       onChange={event => setCustomShoppingItemEmission(Number(event.target.value))}/>
            </label>
            <button className={"add-button"}>Update</button>
        </form>
    )
}