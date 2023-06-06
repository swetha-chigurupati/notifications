const Notification = props => {
  //  Write your code here.
  {className,text,url}=props;
  return (
      <div className="container">
          <img className="img-class" src={url}/>
          <p className={className}>{text}</p>
      </div>
  );
}

const element = (
  //  Write your code here.   
  <div className="bg-container">
      <h1>Notifications</h1>
      <Notification className="blue" text="Information Message" url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
      <Notification className="green" text="Success Message" url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"/>
      <Notification className="yellow" text="Warning Message" url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"/>
      <Notification className="red" text="Error Message" url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"/>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
