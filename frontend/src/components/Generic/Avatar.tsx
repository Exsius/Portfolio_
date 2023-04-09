import { useTheme } from "../../Context/Theme"

const Avatar = () => {

    const { theme } = useTheme()

    return (
        // <svg style={{ width: "128px", height: "128px" }} xmlns="http://www.w3.org/2000/svg">
        //     <path fill={theme.pallete.primary} d="M57.8,-15.5C65.6,5.3,56.2,34.9,35.5,50.2C14.8,65.6,-17.2,66.7,-33.6,53.1C-50,39.6,-50.9,11.4,-42.6,-9.9C-34.4,-31.2,-17.2,-45.7,3.9,-46.9C25,-48.2,49.9,-36.3,57.8,-15.5Z" />
        // </svg>
        <div style={{ margin: "24px 0px 38px 0px", width: "168.74072265625px", height: "168.3607177734375px", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: `url('data:image/svg+xml;utf8,%3Csvg width=%22768.741%22 height=%22768.361%22 viewBox=%2271.099 140.832 768.741 768.361%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22c%22%3E%3Cpath fill=%22currentColor%22 d=%22M803 690.5q-83 190.5-317.5 216T165.5 716Q80 500 207 356t299-154.5q172-10.5 276 144t21 345Z%22%2F%3E%3C%2FclipPath%3E%3Cpattern id=%22a%22 patternUnits=%22userSpaceOnUse%22 width=%2225%22 height=%2225%22 viewBox=%220 0 100 100%22 fill=%22${encodeURIComponent(theme.pallete.neutral)}%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2212.5%22%2F%3E%3C%2Fpattern%3E%3Cfilter id=%22b%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.3 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cpath fill=%22url(%23a)%22 d=%22M803 690.5q-83 190.5-317.5 216T165.5 716Q80 500 207 356t299-154.5q172-10.5 276 144t21 345Z%22 transform=%22translate(-60 -60)%22%2F%3E%3Cg filter=%22url(%23b)%22 clip-path=%22url(%23c)%22%3E%3Cpath fill=%22${encodeURIComponent(theme.pallete.neutral)}%22 d=%22M803 690.5q-83 190.5-317.5 216T165.5 716Q80 500 207 356t299-154.5q172-10.5 276 144t21 345Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')` }} />
    )
}

export default Avatar
  