const vibrate = document.getElementById('vibrate')
const SHORT_VIBRATION = 100
const LONG_VIBRATION = 300
const NO_VIBRATION = 150
const VIBRATION_PATTERN = [SHORT_VIBRATION,NO_VIBRATION,SHORT_VIBRATION,NO_VIBRATION,SHORT_VIBRATION,
                            NO_VIBRATION,LONG_VIBRATION,NO_VIBRATION,LONG_VIBRATION,NO_VIBRATION,LONG_VIBRATION,
                            NO_VIBRATION,SHORT_VIBRATION,NO_VIBRATION,SHORT_VIBRATION,NO_VIBRATION,SHORT_VIBRATION,]



const sosButtonClickHandler = () => {
    if (navigator.userActivation.hasBeenActive) {
        navigator.vibrate(VIBRATION_PATTERN)
    } else {
        console.log("activation needed")
    }
}