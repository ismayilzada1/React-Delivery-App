import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function CardCVCIcon(props) {
    return (
        <Svg
            width={39}
            height={29}
            viewBox="0 0 39 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M34.394 1.667H4.939c-1.807 0-3.272 1.455-3.272 3.25v19.5c0 1.795 1.465 3.25 3.272 3.25h29.455c1.807 0 3.273-1.455 3.273-3.25v-19.5c0-1.795-1.466-3.25-3.273-3.25zM1.667 8.667h36"
                stroke="#D9D0E3"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Rect
                x={17}
                y={13}
                width={14}
                height={6}
                rx={2}
                stroke="#F24E1E"
                strokeWidth={2}
            />
        </Svg>
    )
}

export default CardCVCIcon;
