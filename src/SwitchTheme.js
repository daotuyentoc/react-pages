
const SwitchTheme=({ handleSwitchTheme }) =>{
    return (
        <div className="swicth-theme">
            <span>Dark mode</span>
            <label
                className="switch"
                onClick={() =>
                    handleSwitchTheme(
                        previousDarkMode => !previousDarkMode
                    )
                }
            >
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            <span>Light mode</span>
        </div>
    )
}
export default SwitchTheme