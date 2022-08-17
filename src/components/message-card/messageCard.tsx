import './messageCardStyles.css';

interface params {
  message: string,
  textSent: boolean
}

function MessageCard(params: params) {
  const time = new Date()
  return (
    <div className="main-container">
      <div className="text-container">
        <p className={params.textSent ? "text-sent" : "text-received"}>
          {params.message}
          <span className="time">{`${time.getHours()}:${time.getMinutes()}`}</span>
        </p>
      </div>
    </div>
  )
}

export default MessageCard