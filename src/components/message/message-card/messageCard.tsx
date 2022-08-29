import "./messageCardStyles.css";

export interface params {
	message: string;
	isTextSent: boolean;
	created_at: string;
}

function MessageCard(params: params) {
	const time = new Date(params.created_at);
	let className = "message-container";
	let classNameText = "text-container ";

	if (params.isTextSent) className += " message-sent";

	classNameText += params.isTextSent ? "text-sent" : "text-received";

	return (
		<div className={className}>
			<div className={classNameText}>
				<p className="message">{params.message}</p>
				<span className="time">{`${time.getHours()}:${time.getMinutes()}`}</span>
			</div>
		</div>
	);
}

export default MessageCard;
