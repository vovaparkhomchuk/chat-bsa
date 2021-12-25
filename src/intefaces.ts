export interface IIncomingMessage {
  avatar: string;
  createdAt: string;
  editedAt: string;
  id: string;
  text: string;
  user: string;
  userId: string;
}

export interface IMessage {
  text: string;
  avatar?: string;
  time: string;
  like: boolean;
  id: string;
  user: string;
  userId: string;
}

export interface IMessages {
  messages: IMessage[];
}