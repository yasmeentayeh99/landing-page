import Head from "../Head";
import Button from "../Button";


export const Section4 = () => {
    return (
        <>
            <div className="section-1">
                <Head
                    children = "Clipboard for iOS and Mac OS"
                />
                <text className="text"
                      children = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                />
            </div>
            <div className="buttons">
                <Button
                    color="hsl(171, 66%, 44%)"
                    children = "Download for IOS"
                />
                <Button
                    color="hsl(233, 100%, 69%)"
                    children = "Download for MAC"
                />
            </div>

        </>
    )
}