const Button = props => {
  //  Write your code here.
  const {buttontext, className} = props
  return <button className={className}>{buttontext}</button>
}

const element = (
  //  Write your code here
  <div className='bg-container'>
    <h1 className='heading'>Social Buttons</h1>
    <div>
      <Button buttontext='Like' className='Like-Button' />
      <Button buttontext='Comment' className='comment-Button' />
      <Button buttontext='Share' className='share-Button' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
