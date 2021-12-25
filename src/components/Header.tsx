import {IMessages} from "../intefaces";

const Header = ({messages}: IMessages) => {
  // @ts-ignore
  const usersCount = Object.keys(messages.reduce((acc, curr) => ({...acc, [curr.user]: 1}), {})).length;
  // @ts-ignore
  let lastMsgDate = new Date(Date.parse(messages.slice(-1)[0].time)).toLocaleString("ru").replace(',', '');
  lastMsgDate = lastMsgDate.slice(0, lastMsgDate.length - 3)
  console.log({lastMsgDate: lastMsgDate})

  return (
    <div className={'header'}>
      <div className={'header-title'}>Secret Chat</div>
      <div className={'header-users-count'}>{usersCount} users</div>
      <div className={'header-messages-count'}>{messages.length} messages</div>
      <div className={'header-last-message-date'}>Last message was sent: {lastMsgDate}</div>

    </div>
  )
}

export default Header;