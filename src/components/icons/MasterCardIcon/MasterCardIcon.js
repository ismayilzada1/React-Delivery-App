import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MasterCardIcon(props) {
    return (
        <Svg
            width={33}
            height={20}
            viewBox="0 0 33 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path d="M20.992 2.138h-9.626V17.86h9.626V2.138z" fill="#FF5F00" />
            <Path
                d="M12.357 10a9.981 9.981 0 013.819-7.859 9.998 9.998 0 100 15.722A9.982 9.982 0 0112.357 10z"
                fill="#F24E1E"
            />
            <Path
                d="M31.398 16.197v-.323h.139v-.066h-.33v.066h.13v.323h.06zm.641 0v-.39h-.1l-.116.278-.117-.277h-.1v.389h.072v-.295l.109.253h.075l.108-.253v.295h.07z"
                fill="#F79E1B"
            />
            <Path
                d="M32.353 10a9.998 9.998 0 01-16.177 7.86 9.998 9.998 0 000-15.722 9.998 9.998 0 0116.177 7.86V10z"
                fill="#FFD25F"
            />
        </Svg>
    )
}

export default MasterCardIcon
