import type { ReactElement } from "react"

type HeadingProps = { title: string}

const Heading = ({ title }: HeadingProps): ReactElement => {
    return (
    <div className="app-heading">
        <h1>{title}</h1>
    </div>
    )
}
export default Heading