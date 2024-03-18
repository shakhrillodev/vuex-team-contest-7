import './text-content.scss'
const TextContent = () => {
  return (
    <div style={{textAlign: "center"}}>
        <p>:: Technical interviews ::</p>
        <h3 className='big-title' style={{margin: "20px 0"}}>Interview like it’s <span className='colourful-text'>2024</span></h3>
        <p className='description' style={{textAlign: "center", maxWidth: "620px", margin: '0 auto'}}>Ditch out of reach and out of touch interview questions about golf balls and 747s — and turn off your clunky screen share for good. Code, create, and collaborate with an IDE built to showcase real-world skills in a real-world environment.</p>
    </div>
  )
}

export default TextContent