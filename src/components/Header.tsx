import {IMessages} from "../intefaces";

const Header = ({messages}: IMessages) => {
  return (
    <div className={'header'}>
      <div className={'header-title'}>Chat name</div>
      <div className={'header-users-count'}>23 users</div>
      <div className={'header-messages-count'}>{messages.length} messages</div>
      <div className={'header-last-message-date'}>Last message was sent: 15.02.2021 13:35</div>

    </div>
  )
}

export default Header;