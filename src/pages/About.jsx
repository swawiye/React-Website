//Embedding expressions
const identity = "Greenify";
export const Question = () => {
    return <h4>Who are we? We are {identity}</h4>
}

const AboutContent = () => {
    return (
        <div>
            <h4>Who are we? We are {identity}!</h4>
            <p>
                Here at Greenify we love trees
            </p>
        </div>
    )
}
export default AboutContent;