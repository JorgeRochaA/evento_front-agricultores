import './messageCardStyles.css';

export interface params {
  message: string,
  isTextSent: boolean
  created_at: string
}

function MessageCard(params: params) {
  const time = new Date(params.created_at)
  let className = 'message-container'

  if(params.isTextSent) className += ' message-sent'

  return (
    <div className={className}>
      <div className="text-container">
        <p className={params.isTextSent ? "text-sent" : "text-received"}>
          {params.message}
          <span className="time">{`${time.getHours()}:${time.getMinutes()}`}</span>
        </p>
      </div>
    </div>
  )
}

export default MessageCard